import os
import time
import traceback

import requests
from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")
RATE_LIMIT_WINDOW_SEC = 10 * 60
RATE_LIMIT_MAX = 5
_rate_limit_store = {}


def _env(name, default=None):
    value = os.environ.get(name, default)
    return value.strip() if isinstance(value, str) else value


def _allowed_origin():
    return _env("FRONTEND_ORIGIN", "*")


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = _allowed_origin()
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS, GET"
    return response


def send_telegram_message(name, email, message):
    bot_token = _env("TELEGRAM_BOT_TOKEN")
    chat_id = _env("TELEGRAM_CHAT_ID")

    if not bot_token or not chat_id:
        raise RuntimeError("Telegram settings are not configured.")

    text = (
        "New message from website\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n\n"
        f"Message:\n{message}"
    )

    response = requests.post(
        f"https://api.telegram.org/bot{bot_token}/sendMessage",
        json={
            "chat_id": chat_id,
            "text": text,
        },
        timeout=15,
    )
    response.raise_for_status()


@app.get("/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/api/contact", methods=["OPTIONS"])
def contact_options():
    return ("", 204)


@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    website = (data.get("website") or "").strip()
    message = (data.get("message") or "").strip()

    if website:
        return jsonify(ok=False, error="Invalid form submission."), 400

    ip = request.headers.get("X-Forwarded-For", request.remote_addr) or "unknown"
    now = time.time()
    window_start = now - RATE_LIMIT_WINDOW_SEC
    timestamps = [ts for ts in _rate_limit_store.get(ip, []) if ts > window_start]
    if len(timestamps) >= RATE_LIMIT_MAX:
        return jsonify(ok=False, error="Too many requests. Try again later."), 429
    timestamps.append(now)
    _rate_limit_store[ip] = timestamps

    if not name or not email or not message:
        return jsonify(ok=False, error="Please fill in all required fields."), 400

    try:
        send_telegram_message(name, email, message)
    except Exception:
        traceback.print_exc()
        return jsonify(ok=False, error="Failed to send message."), 500

    return jsonify(ok=True)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(_env("PORT", "5000")), debug=True)

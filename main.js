const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section');
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const revealTargets = document.querySelectorAll('.card, .logo-card, .tag, h2');
const contactApiUrl = window.CONTACT_API_URL || 'http://127.0.0.1:5000/api/contact';

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((target) => {
  target.classList.add('reveal');
  observer.observe(target);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', active);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = '';
    formNote.classList.remove('success', 'error');

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      website: formData.get('website')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
    };

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Отправляем...';
    }

    fetch(contactApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) {
          throw new Error(data.error || 'Не удалось отправить сообщение.');
        }
        form.reset();
        formNote.textContent = 'Спасибо! Сообщение отправлено.';
        formNote.classList.add('success');
      })
      .catch((error) => {
        formNote.textContent = error.message || 'Произошла ошибка при отправке.';
        formNote.classList.add('error');
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Отправить';
        }
      });
  });
}

(function () {
  const weeks = Array.isArray(window.clubWeeks) ? window.clubWeeks : [];
  const meetings = Array.isArray(window.clubMeetings) ? window.clubMeetings : [];

  function truncateText(text, maxLength = 180) {
    if (!text || text.length <= maxLength) {
      return text || "";
    }

    return `${text.slice(0, maxLength).trimEnd()}...`;
  }

  function revealElements(elements) {
    const targets = [...elements].filter(Boolean);
    if (!targets.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
      observer.observe(target);
    });
  }

  function getMeetingById(meetingId) {
    return meetings.find((meeting) => meeting.id === meetingId);
  }

  function createMeetingsBanner() {
    const root = document.querySelector("[data-meetings-entry]");
    if (!root || !meetings.length) {
      return;
    }

    const slides = meetings
      .slice(0, 4)
      .map(
        (meeting, index) => `
          <div class="meetings-hero-slide${index === 0 ? " is-active" : ""}" data-meetings-slide>
            <img src="${meeting.image}" alt="${meeting.title}" class="meetings-hero-image" />
          </div>
        `
      )
      .join("");

    root.innerHTML = `
      <a class="card meetings-hero-link" href="week.html" aria-label="Открыть страницу Наши встречи">
        <div class="meetings-hero-media" data-meetings-slider>
          ${slides}
          <div class="meetings-hero-overlay"></div>
        </div>
        <div class="meetings-hero-content">
          <span class="tag">Наши встречи</span>
          <h3>Наши встречи</h3>
          <p class="meetings-hero-text">Все встречи клуба собраны в одном живом каталоге с фото, темами и подробным описанием.</p>
          <span class="meetings-hero-action">Перейти к встречам</span>
        </div>
      </a>
    `;

    const slideNodes = root.querySelectorAll("[data-meetings-slide]");
    let activeIndex = 0;

    if (slideNodes.length > 1) {
      window.setInterval(() => {
        slideNodes[activeIndex]?.classList.remove("is-active");
        activeIndex = (activeIndex + 1) % slideNodes.length;
        slideNodes[activeIndex]?.classList.add("is-active");
      }, 3200);
    }

    revealElements(root.querySelectorAll(".meetings-hero-link"));
  }

  function createMeetingCard(meeting) {
    const article = document.createElement("article");
    article.className = "card meeting-card";
    article.innerHTML = `
      <a class="meeting-card-link" href="meeting.html?meeting=${encodeURIComponent(meeting.id)}" aria-label="Открыть встречу ${meeting.title}">
        <div class="meeting-card-media">
          <img class="meeting-card-image" src="${meeting.image}" alt="${meeting.title}" loading="lazy" />
        </div>
        <div class="meeting-card-body">
          <p class="meeting-date">${meeting.date}</p>
          <h3 class="meeting-title">${meeting.title}</h3>
          <p class="meeting-topic"><strong>Тема:</strong> ${meeting.topic}</p>
          <p class="meeting-description">${truncateText(meeting.description)}</p>
        </div>
      </a>
    `;
    return article;
  }

  function renderMeetingsPage() {
    const root = document.querySelector("[data-meetings-page]");
    if (!root) {
      return;
    }

    const titleNode = document.querySelector("[data-meetings-title]");
    const subtitleNode = document.querySelector("[data-meetings-subtitle]");
    const infoNode = document.querySelector("[data-meetings-info]");

    if (!meetings.length) {
      if (titleNode) {
        titleNode.textContent = "Наши встречи";
      }
      if (subtitleNode) {
        subtitleNode.textContent = "Список встреч пока пуст.";
      }
      if (infoNode) {
        infoNode.textContent = "";
      }
      root.innerHTML = '<article class="card page-empty-state reveal visible"><p>Встречи пока не добавлены.</p></article>';
      return;
    }

    document.title = "Наши встречи | Progressive Students Club";

    if (titleNode) {
      titleNode.textContent = "Наши встречи";
    }
    if (subtitleNode) {
      subtitleNode.textContent = "Все встречи клуба собраны в едином современном каталоге.";
    }
    if (infoNode) {
      infoNode.textContent = `${meetings.length} встреч`;
    }

    root.innerHTML = "";
    meetings.forEach((meeting) => {
      root.appendChild(createMeetingCard(meeting));
    });

    revealElements(root.querySelectorAll(".meeting-card"));
  }

  function renderMeetingPage() {
    const root = document.querySelector("[data-meeting-page]");
    if (!root) {
      return;
    }

    const backLink = document.querySelector("[data-meeting-back]");
    if (backLink) {
      backLink.href = "week.html";
    }
    const params = new URLSearchParams(window.location.search);
    const meeting = getMeetingById(params.get("meeting"));

    if (!meeting) {
      root.innerHTML = '<article class="card page-empty-state reveal visible"><p>Встреча не найдена. Вернитесь назад и выберите другую карточку.</p></article>';
      return;
    }

    document.title = `${meeting.title} | Progressive Students Club`;
    const isMarchSeventhMeeting = meeting.id === "meeting-5";

    root.innerHTML = `
      <article class="card meeting-detail-card${isMarchSeventhMeeting ? " meeting-detail-card-reverse" : ""} reveal visible">
        <div class="meeting-detail-media">
          <img class="meeting-detail-image" src="${meeting.image}" alt="${meeting.title}" />
        </div>
        <div class="meeting-detail-body">
          <p class="meeting-detail-week">Наши встречи</p>
          <p class="meeting-date">${meeting.date}</p>
          <h1 class="meeting-detail-title">${meeting.title}</h1>
          <p class="meeting-detail-topic"><strong>Тема:</strong> ${meeting.topic}</p>
          <p class="meeting-detail-description">${meeting.fullDescription}</p>
        </div>
      </article>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    createMeetingsBanner();
    renderMeetingsPage();
    renderMeetingPage();
  });
})();

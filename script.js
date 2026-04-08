const team = [
  {
    name: "\u041a\u0441\u0435\u043d\u0438\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043d\u0430",
    role: "",
    className: "\u041d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a",
    description: "\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043a\u043b\u0443\u0431\u0430 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443.",
    details: "\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043e\u0431\u0449\u0435\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0443\u0431\u0430, \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c \u0440\u0430\u0441\u0442\u0438 \u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",
    accent: ["#86efac", "#0d9488"],
    image: "team/images/ксения.jpg"
  },
  {
    name: "\u0410\u043b\u044b\u043c\u043a\u0443\u043b\u043e\u0432 \u0410\u0440\u0441\u0435\u043d",
    role: "Co-founder / Tech Lead",
    className: "10\u0410",
    description: "\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",
    details: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0441\u0430\u0439\u0442, \u0444\u0438\u043a\u0441\u0438\u0442 \u0431\u0430\u0433\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443.",
    accent: ["#60a5fa", "#1d4ed8"],
    image: "team/images/арсен.jpg"
  },
  {
    name: "\u0410\u0439\u0434\u0430\u0440\u043e\u0432\u0430 \u0410\u0434\u0438\u043d\u0430\u0439",
    role: "Voice Over Specialist",
    className: "10\u0410",
    description: "\u041e\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0442\u0435\u043d\u0442.",
    details: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0432\u0438\u0434\u0435\u043e.",
    accent: ["#a78bfa", "#6d28d9"],
    image: ""
  },
  {
    name: "\u0410\u043a\u043c\u0430\u0442\u043e\u0432\u0430 \u0421\u0430\u0430\u0434\u0430\u0442",
    role: "Web Architect",
    className: "10\u0411",
    description: "\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u0430\u0439\u0442\u043e\u0432.",
    details: "\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 UX \u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446.",
    accent: ["#60a5fa", "#1d4ed8"],
    image: "team/images/саадат.jpg"
  },
  {
    name: "\u0410\u043f\u044b\u0448\u0435\u0432\u0430 \u0410\u0436\u0430\u0440\u0430",
    role: "Copywriter",
    className: "10\u0412",
    description: "\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.",
    details: "\u041f\u0438\u0448\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",
    accent: ["#86efac", "#16a34a"],
    image: "team/images/ажара.jpg"
  },
  {
    name: "\u0410\u0441\u043a\u0430\u0440\u043e\u0432\u0430 \u0414\u0430\u044f\u043d\u0430",
    role: "Idea Manager",
    className: "10\u0413",
    description: "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0434\u0435\u0438.",
    details: "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u0442 \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438.",
    accent: ["#facc15", "#ca8a04"],
    image: "team/images/даяна.jpg"
  },
  {
    name: "\u0411\u0430\u0439\u043c\u044b\u0440\u0437\u0430\u0435\u0432 \u041d\u0443\u0440\u0441\u0443\u043b\u0442\u0430\u043d",
    role: "Photographer / Content Creator",
    className: "10\u0413",
    description: "\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0438\u0437\u0443\u0430\u043b.",
    details: "\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0444\u043e\u0442\u043e-\u043a\u043e\u043d\u0442\u0435\u043d\u0442.",
    accent: ["#f97316", "#ea580c"],
    image: "team/images/нурсултан.jpg"
  },
  {
    name: "\u0414\u0436\u0430\u043b\u0438\u043b\u043e\u0432\u0430 \u041a\u0443\u043c\u0443\u0448\u0430\u0439",
    role: "Copywriter",
    className: "10\u0410",
    description: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438.",
    details: "\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.",
    accent: ["#86efac", "#16a34a"],
    image: "team/images/кумушай.jpg"
  },
  {
    name: "\u0416\u0443\u043c\u0430\u0435\u0432\u0430 \u0410\u044f\u043d\u0430",
    role: "Content Manager",
    className: "10\u0410",
    description: "\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.",
    details: "\u041f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438.",
    accent: ["#22c55e", "#15803d"],
    image: "team/images/аяна.jpg"
  },
  {
  name: "Красная София",
  role: "Founder / Social Media Manager",
  className: "10Б",
  description: "Основательница клуба и отвечает за контент.",
  details: "Создаёт и развивает контент для Instagram и Threads, формирует стиль и подачу проекта в соцсетях.",
  accent: ["#fb7185", "#be123c"],
  image: "team/images/софия.jpg"

  },
  {
  name: "Лоянов Ридван",
  role: "Activity Manager / Social Media Manager",
  className: "10\u0410",
  description: "Создаёт движ, ведёт соцсети в Instagram и Threads.",
  details: "Организует активность команды, управляет контентом и продвижением в Instagram и Threads.",
  accent: ["#facc15", "#eab308"],
  image: "team/images/ридван.jpg"
},
  {
    name: "\u041d\u0430\u0437\u0430\u0440\u0431\u0435\u043a\u043e\u0432 \u0411\u0435\u043a\u0442\u0443\u0440",
    role: "Voice Over Specialist",
    className: "10\u0411",
    description: "\u041e\u0437\u0432\u0443\u0447\u043a\u0430 \u0432\u0438\u0434\u0435\u043e.",
    details: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0433\u043e\u043b\u043e\u0441\u043e\u043c.",
    accent: ["#a78bfa", "#6d28d9"],
    image: "team/images/бектур.jpg"
  },
  {
    name: "\u0420\u0430\u0438\u043c\u0436\u0430\u043d\u043e\u0432\u0430 \u0410\u0439\u0433\u0435\u0440\u0438\u043c",
    role: "Voice Over / Research",
    className: "10\u0413",
    description: "\u041e\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043e \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439.",
    details: "\u0417\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u0437\u0432\u0443\u0447\u043a\u043e\u0439 \u0432\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0449\u0435\u0442 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",
    accent: ["#a78bfa", "#6d28d9"],
    image: "team/images/айгерим.jpg"
  },
  {
    name: "\u0422\u043e\u043a\u043f\u0430\u0435\u0432\u0430 \u0410\u0439\u043f\u0435\u0440\u0438",
    role: "Event Researcher",
    className: "10\u0410",
    description: "\u0418\u0449\u0435\u0442 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f.",
    details: "\u041d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f.",
    accent: ["#2dd4bf", "#0f766e"],
    image: ""
  },
  {
    name: "\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0430\u044f \u0410\u0440\u0438\u043d\u0430",
    role: "Video Editor",
    className: "10\u0412",
    description: "\u041c\u043e\u043d\u0442\u0430\u0436 \u0432\u0438\u0434\u0435\u043e.",
    details: "\u0414\u0435\u043b\u0430\u0435\u0442 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436.",
    accent: ["#ef4444", "#991b1b"],
    image: "team/images/арина.jpg"
  },
  {
    name: "\u0423\u043b\u0430\u043d\u043e\u0432\u0430 \u0410\u0439\u0448\u0430",
    role: "Content Designer",
    className: "10\u0412",
    description: "\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0432\u0438\u0437\u0443\u0430\u043b.",
    details: "\u0414\u0435\u043b\u0430\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043d \u043f\u043e\u0441\u0442\u043e\u0432.",
    accent: ["#fb7185", "#be123c"],
    image: "team/images/айша.jpg"
  },
  {
    name: "\u0423\u043c\u0443\u0440\u0431\u0435\u043a\u043e\u0432 \u0411\u0430\u0439\u0441\u0430\u043b",
    role: "Eco Activist",
    className: "10\u0412",
    description: "\u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u044b.",
    details: "\u041f\u0440\u043e\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435.",
    accent: ["#4ade80", "#166534"],
    image: "team/images/байсал.jpg"
  },
  {
    name: "\u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430",
    role: "Team Coordinator",
    className: "10\u0410",
    description: "\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",
    details: "\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432.",
    accent: ["#38bdf8", "#075985"],
    image: "team/images/екатерина.jpg"
  },
  {
    name: "\u042b\u0431\u044b\u0440\u0430\u0435\u0432\u0430 \u0422\u0430\u0441\u043b\u0438\u043c\u0430",
    role: "Network Builder",
    className: "10\u0412",
    description: "\u0412\u0435\u0434\u0451\u0442 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044e \u0441 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043c\u0435\u0434\u0438\u0430\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430.",
    details: "\u041e\u0431\u0449\u0430\u0435\u0442\u0441\u044f \u0441 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430\u043c\u0438, \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0443\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0443\u0431\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0441\u044a\u0451\u043c\u043a\u0435 \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043c\u0435\u0434\u0438\u0430\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043a\u043b\u0443\u0431\u0430.",
    accent: ["#2dd4bf", "#115e59"],
    image: "team/images/таслима.jpg"
  }
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function createAvatarDataUri(name, colors) {
  const [start, end] = colors;
  const initials = getInitials(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="600" height="700" rx="42" fill="url(#grad)" />
      <circle cx="470" cy="125" r="110" fill="rgba(255,255,255,0.14)" />
      <circle cx="120" cy="570" r="160" fill="rgba(255,255,255,0.1)" />
      <text x="50%" y="52%" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="184" font-weight="700">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const preparedTeam = team.map((member) => ({
  ...member,
  image: member.image || createAvatarDataUri(member.name, member.accent),
}));

const featuredMemberName = "Ксения Александровна";
const priorityMemberNames = [
  "Алымкулов Арсен",
  "Красная София",
  "Лоянов Ридван",
];

const orderedTeam = [
  ...preparedTeam.filter((member) => priorityMemberNames.includes(member.name)),
  ...preparedTeam.filter(
    (member) => member.name !== featuredMemberName && !priorityMemberNames.includes(member.name)
  ),
];

function createTeamCard(member, { compact = false, interactive = false, featured = false } = {}) {
  const article = document.createElement("article");
  article.className = `card team-member-card${featured ? " team-member-card-featured" : ""}`;

  const roleBlock = member.role ? `<p class="team-member-role">${member.role}</p>` : "";
  const badges = [member.className, member.role].filter(Boolean);
  const badgesHtml = badges.length
    ? `<p class="team-member-meta">${badges.map((item) => `<span class="team-badge">${item}</span>`).join("")}</p>`
    : "";
  const descriptionText = compact ? member.description : member.details;
  const descriptionHtml = descriptionText ? `<p class="team-member-description">${descriptionText}</p>` : "";

  const content = `
    <div class="team-member-media">
      <img class="team-member-image" src="${member.image}" alt="${member.name}" loading="lazy" />
    </div>
    <div class="team-member-content">
      <div class="team-member-header">
        <h3 class="team-member-name">${member.name}</h3>
        ${roleBlock}
      </div>
      ${badgesHtml}
      ${descriptionHtml}
    </div>
  `;

  if (interactive) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "team-member-button";
    button.setAttribute("aria-label", `\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c: ${member.name}`);
    button.innerHTML = content;
    article.appendChild(button);
  } else {
    article.innerHTML = content;
  }

  return article;
}

function applyRevealAnimation(elements) {
  const targets = [...elements].filter(Boolean);
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}

function renderTeamPreview() {
  const previewRoot = document.querySelector("[data-team-preview]");
  const featuredRoot = document.querySelector("[data-team-featured]");
  const featuredMember = preparedTeam.find((member) => member.name === featuredMemberName);
  const restMembers = orderedTeam;

  if (featuredRoot && featuredMember) {
    featuredRoot.innerHTML = "";
    featuredRoot.appendChild(createTeamCard(featuredMember, { compact: false, featured: true }));
  }

  if (!previewRoot) {
    if (featuredRoot) {
      applyRevealAnimation(featuredRoot.querySelectorAll(".team-member-card"));
    }
    return;
  }

  previewRoot.innerHTML = "";
  restMembers.slice(0, 4).forEach((member) => {
    previewRoot.appendChild(createTeamCard(member, { compact: true }));
  });

  if (featuredRoot) {
    applyRevealAnimation(featuredRoot.querySelectorAll(".team-member-card"));
  }
  applyRevealAnimation(previewRoot.querySelectorAll(".team-member-card"));
}

function renderTeamFilters(members) {
  const roleFilter = document.querySelector("[data-team-role-filter]");
  const classFilter = document.querySelector("[data-team-class-filter]");
  if (!roleFilter || !classFilter) return;

  const roles = [...new Set(members.map((member) => member.role).filter(Boolean))];
  const classes = [...new Set(members.map((member) => member.className).filter(Boolean))];

  const fillSelect = (select, values, label) => {
    select.innerHTML = `<option value="">${label}</option>`;
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  };

  fillSelect(roleFilter, roles, "\u0412\u0441\u0435 \u0440\u043e\u043b\u0438");
  fillSelect(classFilter, classes, "\u0412\u0441\u0435 \u043a\u043b\u0430\u0441\u0441\u044b");
}

function setupTeamModal(members) {
  const modal = document.querySelector("[data-team-modal]");
  if (!modal) return null;

  const closeButton = modal.querySelector("[data-team-modal-close]");
  const backdrop = modal.querySelector("[data-team-modal-backdrop]");
  const image = modal.querySelector("[data-team-modal-image]");
  const name = modal.querySelector("[data-team-modal-name]");
  const role = modal.querySelector("[data-team-modal-role]");
  const className = modal.querySelector("[data-team-modal-class]");
  const description = modal.querySelector("[data-team-modal-description]");
  const details = modal.querySelector("[data-team-modal-details]");

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openModal = (memberName) => {
    const member = members.find((item) => item.name === memberName);
    if (!member) return;

    image.src = member.image;
    image.alt = member.name;
    name.textContent = member.name;
    role.textContent = member.role || "";
    className.textContent = member.className || "";
    description.textContent = member.description || "";
    details.textContent = member.details || "";

    modal.hidden = false;
    document.body.classList.add("modal-open");
  };

  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  return { openModal };
}

function renderTeamPage() {
  const grid = document.querySelector("[data-team-grid]");
  const featuredRoot = document.querySelector("[data-team-featured]");
  if (!grid) return;

  const roleFilter = document.querySelector("[data-team-role-filter]");
  const classFilter = document.querySelector("[data-team-class-filter]");
  const emptyState = document.querySelector("[data-team-empty]");
  const modalApi = setupTeamModal(preparedTeam);
  const featuredMember = preparedTeam.find((member) => member.name === featuredMemberName);

  renderTeamFilters(preparedTeam);

  if (featuredRoot && featuredMember) {
    featuredRoot.innerHTML = "";
    const featuredCard = createTeamCard(featuredMember, { interactive: true, featured: true });
    featuredCard.querySelector(".team-member-button")?.addEventListener("click", () => {
      modalApi?.openModal(featuredMember.name);
    });
    featuredRoot.appendChild(featuredCard);
  }

  const draw = () => {
    const selectedRole = roleFilter?.value || "";
    const selectedClass = classFilter?.value || "";

    const filtered = orderedTeam.filter((member) => {
      const roleMatch = !selectedRole || member.role === selectedRole;
      const classMatch = !selectedClass || member.className === selectedClass;
      return roleMatch && classMatch;
    });

    grid.innerHTML = "";
    filtered.forEach((member) => {
      const card = createTeamCard(member, { interactive: true });
      card.querySelector(".team-member-button")?.addEventListener("click", () => {
        modalApi?.openModal(member.name);
      });
      grid.appendChild(card);
    });

    if (emptyState) {
      emptyState.hidden = filtered.length > 0;
    }

    if (featuredRoot) {
      const showFeatured = !selectedRole || featuredMember?.role === selectedRole;
      const showFeaturedByClass = !selectedClass || featuredMember?.className === selectedClass;
      featuredRoot.hidden = !(showFeatured && showFeaturedByClass);
    }

    if (emptyState && featuredRoot?.hidden === false) {
      emptyState.hidden = true;
    }

    if (featuredRoot) {
      applyRevealAnimation(featuredRoot.querySelectorAll(".team-member-card"));
    }
    applyRevealAnimation(grid.querySelectorAll(".team-member-card"));
  };

  roleFilter?.addEventListener("change", draw);
  classFilter?.addEventListener("change", draw);
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTeamPreview();
  renderTeamPage();
});

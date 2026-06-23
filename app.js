const profile = {
  publicRepos: 3,
  following: 2,
  since: 2023,
};

const projects = [
  {
    name: "Smart-luggage-module",
    language: "C++",
    description: "모빌리티센서공학 프로젝트 과제로 제작된 스마트 러기지 모듈입니다.",
    url: "https://github.com/Anet862000/Smart-luggage-module",
    updated: "2026.06.23",
    license: "Apache-2.0",
    focus: "Sensor Module",
  },
  {
    name: "gong_rc_2026",
    language: "Python",
    description: "공주대 오토카 프로젝트 수업에서 다루는 자율주행/RC카 기반 프로젝트입니다.",
    url: "https://github.com/Anet862000/gong_rc_2026",
    updated: "2026.06.23",
    license: "Apache-2.0",
    focus: "Autocar",
  },
  {
    name: "anet86",
    language: "Archive",
    description: "GitHub 활동의 시작점으로 남아 있는 초기 공개 저장소입니다.",
    url: "https://github.com/Anet862000/anet86",
    updated: "2023.07.20",
    license: "No license",
    focus: "Starter Repo",
  },
];

const stats = [
  ["Repos", profile.publicRepos],
  ["Following", profile.following],
  ["Since", profile.since],
];

const profileStats = document.querySelector("#profileStats");
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");

function renderStats() {
  profileStats.innerHTML = stats
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");
}

function renderProjects(filter = "all") {
  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.language === filter);

  projectGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-card__top">
            <h3>${project.name}</h3>
            <span class="language">${project.language}</span>
          </div>
          <p>${project.description}</p>
          <div class="project-card__meta" aria-label="${project.name} 정보">
            <span>${project.focus}</span>
            <span>${project.updated}</span>
            <span>${project.license}</span>
          </div>
          <a class="project-card__link" href="${project.url}" target="_blank" rel="noreferrer">
            저장소 열기
          </a>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

renderStats();
renderProjects();

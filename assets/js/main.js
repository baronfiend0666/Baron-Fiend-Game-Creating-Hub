/* =========================================================
   Game Planning Portfolio Site
   - 프로젝트/문서/영상/원작 웹소설 카드는 data/projects.js의 데이터를 읽어 생성합니다.
   - 파일명, YouTube 주소, 원작 웹소설 URL은 data/projects.js에서 수정합니다.
   ========================================================= */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const data = window.PORTFOLIO_DATA ?? { projects: [], portfolioSections: [], novelIPs: [] };

const projectFolderMap = {
  "patris": "patris",
  "crimson-frequency": "crimson-frequency",
  "anomaly-record": "anomaly-record",
};

const sectionFolderMap = {
  "pre-production": "01_pre_production_portfolio",
  "concept": "02_concept_planning_portfolio",
  "system": "03_system_planning_portfolio",
};

function createBadge(text) {
  return `<span class="badge">${text}</span>`;
}

function getProjectFilePrefix(project) {
  return project.name.replaceAll(" ", "_");
}

function getFilePath(project, section, item) {
  const projectFolder = projectFolderMap[project.id];
  const sectionFolder = sectionFolderMap[section.id];
  const fileName = `${getProjectFilePrefix(project)}_${item.slug}.${item.ext}`;
  return `assets/docs/${projectFolder}/${sectionFolder}/${fileName}`;
}

function renderProjects() {
  const grid = $("[data-project-grid]");
  if (!grid) return;

  grid.innerHTML = data.projects.map((project) => {
    const tags = project.tags.map(createBadge).join("");
    const projectImage = project.cardImage || project.background;

    return `
      <article class="project-card visible-project-card">
        <div class="project-visual-wrap">
          <img class="project-visual" src="${projectImage}" alt="${project.name} 프로젝트 대표 이미지" loading="lazy" />
        </div>
        <div class="project-content">
          <span class="project-order">${project.order}</span>
          <h3>${project.videoTitle || project.name}</h3>
          <p class="project-summary">${project.projectDisplayLine || `${project.nameKo} · ${project.genre}`}</p>
          <div class="project-meta">
            ${createBadge(project.engine)}
            ${tags}
          </div>
          <p class="project-summary">${project.summary}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderDocuments() {
  const grid = $("[data-document-grid]");
  if (!grid) return;

  grid.innerHTML = data.projects.map((project) => {
    const sectionCards = data.portfolioSections.map((section) => {
      const items = section.items.map((item) => {
        const href = getFilePath(project, section, item);
        const displayTitle = `${getProjectFilePrefix(project)}_${item.title}`;
        return `
          <li class="portfolio-file">
            <div>
              <strong>${displayTitle}</strong>
              <span>${item.ext.toUpperCase()} · <code>${href}</code></span>
            </div>
            <a class="file-link" href="${href}" target="_blank" rel="noopener">열기</a>
          </li>
        `;
      }).join("");

      return `
        <article class="portfolio-section-card">
          <div class="portfolio-section-head">
            <span class="project-order">${section.order}</span>
            <div>
              <h3>${project.name}_${section.title}</h3>
              <p>${project.nameKo} · ${project.genre}</p>
            </div>
          </div>
          <ul class="portfolio-file-list">${items}</ul>
        </article>
      `;
    }).join("");

    return `
      <section id="portfolio-${project.id}" class="project-document-block" data-project="${project.id}">
        <div class="project-document-title">
          <span class="project-order">${project.order}</span>
          <div>
            <h3>${project.videoTitle || project.name}</h3>
            <p>${project.nameKo} 포트폴리오 파일 세트</p>
          </div>
        </div>
        <div class="project-document-sections">${sectionCards}</div>
      </section>
    `;
  }).join("");
}

function renderVideos() {
  const grid = $("[data-video-grid]");
  if (!grid) return;

  grid.innerHTML = data.projects.map((project) => {
    const hasYoutube = project.youtube && project.youtube.trim().length > 0;
    const videoArea = hasYoutube
      ? `
        <iframe
          class="video-frame"
          src="${project.youtube}"
          title="${project.videoTitle || project.name} storyboard-based AI animation output"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `
      : `
        <div class="video-placeholder" aria-label="${project.videoTitle || project.name} YouTube URL 삽입 칸">
          <span>YouTube URL 삽입 대기</span>
          <code>data/projects.js → ${project.id}.youtube</code>
        </div>
      `;

    return `
      <article class="video-card">
        ${videoArea}
        <div class="video-card-body">
          <h3>${project.videoTitle || project.name}</h3>
          <p>${project.videoDescription || "AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다."}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderNovelIPs() {
  const grid = $("[data-novel-grid]");
  if (!grid) return;

  grid.innerHTML = (data.novelIPs ?? []).map((novel) => {
    const platforms = novel.platforms.map((platform) => {
      const hasUrl = platform.url && platform.url.trim().length > 0;
      const href = hasUrl ? platform.url : "#";
      const label = hasUrl ? "연재 페이지 열기" : "URL 삽입 대기";
      return `
        <li class="novel-platform">
          <div>
            <strong>${platform.name}</strong>
            <span>${hasUrl ? platform.url : "data/projects.js에서 연재 페이지 URL 삽입"}</span>
          </div>
          <a class="file-link ${hasUrl ? "" : "is-disabled"}" href="${href}" ${hasUrl ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>${label}</a>
        </li>
      `;
    }).join("");

    return `
      <article class="novel-card">
        <span class="badge">${novel.project}</span>
        <h3>
          <span class="novel-label-line">${novel.label}</span>
          <span class="novel-title-line">${novel.titlePrefix || "원작 웹소설 IP"} - 『${novel.title}』</span>
        </h3>
        <ul class="novel-platform-list">${platforms}</ul>
      </article>
    `;
  }).join("");
}

function bindDocumentFilters() {
  const tabs = $$("[data-filter]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      const cards = $$(".project-document-block");
      tabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      cards.forEach((card) => {
        const visible = filter === "all" || card.dataset.project === filter;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });
}

function bindDisabledLinks() {
  document.addEventListener("click", (event) => {
    const disabledLink = event.target.closest("a.is-disabled");
    if (disabledLink) event.preventDefault();
  });
}

function bindMobileNavigation() {
  const toggle = $("[data-nav-toggle]");
  const nav = $("[data-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

function bindHeaderState() {
  const header = $("[data-header]");
  if (!header) return;
  const setState = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  setState();
  window.addEventListener("scroll", setState, { passive: true });
}

function setCurrentYear() {
  const year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

renderProjects();
renderDocuments();
renderVideos();
renderNovelIPs();
bindDocumentFilters();
bindDisabledLinks();
bindMobileNavigation();
bindHeaderState();
setCurrentYear();

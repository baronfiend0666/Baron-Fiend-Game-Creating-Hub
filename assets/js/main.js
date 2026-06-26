/* =========================================================
   Game Planning Portfolio Site
   - 프로젝트/문서/영상/원작 웹소설 카드는 data/projects.js의 데이터를 읽어 생성합니다.
   - 파일명, YouTube 주소, 원작 웹소설 URL은 data/projects.js에서 수정합니다.
   ========================================================= */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const data = window.PORTFOLIO_DATA ?? { projects: [], portfolioSections: [], novelIPs: [] };

const escapeAttribute = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[char]));

function injectProjectAppIconStyles() {
  if (document.querySelector("[data-project-app-icon-style]")) return;

  const style = document.createElement("style");
  style.dataset.projectAppIconStyle = "true";
  style.textContent = `
    .project-detail-heading-wrap {
      display: flex;
      align-items: center;
      gap: 18px;
      margin: 8px 0 10px;
    }

    .project-detail-heading-wrap h3 {
      margin: 0;
    }

    .project-detail-app-icon {
      width: 92px;
      height: 92px;
      flex: 0 0 92px;
      border-radius: 28px;
      object-fit: cover;
      border: 1px solid rgba(255, 255, 255, 0.44);
      background: rgba(7, 10, 22, 0.60);
      box-shadow:
        0 18px 42px rgba(0, 0, 0, 0.42),
        0 0 0 1px rgba(122, 162, 255, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.16);
    }

    @media (max-width: 720px) {
      .project-detail-heading-wrap {
        align-items: flex-start;
        gap: 14px;
      }

      .project-detail-app-icon {
        width: 72px;
        height: 72px;
        flex-basis: 72px;
        border-radius: 22px;
      }
    }
  `;
  document.head.appendChild(style);
}

function getCurrentProjectFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project") || document.querySelector("#documents .tab.is-active")?.dataset.filter;
  return data.projects.find((project) => project.id === projectId) || null;
}

function enhanceProjectDetailAppIcon() {
  const detail = document.querySelector("[data-project-detail-page]");
  const project = getCurrentProjectFromUrl();
  if (!detail || detail.hidden || !project?.appIcon) return;
  if (detail.querySelector(".project-detail-app-icon")) return;

  const title = detail.querySelector(".project-detail-copy h3");
  if (!title) return;

  const titleWrap = document.createElement("div");
  titleWrap.className = "project-detail-heading-wrap";

  const icon = document.createElement("img");
  icon.className = "project-detail-app-icon";
  icon.src = project.appIcon;
  icon.alt = `${project.nameKo || project.name} 앱 아이콘`;
  icon.loading = "lazy";

  title.parentNode.insertBefore(titleWrap, title);
  titleWrap.append(icon, title);
}

function bindProjectDetailAppIconObserver() {
  const detail = document.querySelector("[data-project-detail-page]");
  if (!detail) return;

  let frameId = 0;
  const scheduleEnhancement = () => {
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(enhanceProjectDetailAppIcon);
  };

  new MutationObserver(scheduleEnhancement).observe(detail, {
    childList: true,
    subtree: true,
  });

  window.addEventListener("popstate", scheduleEnhancement);
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-project-image-link], [data-project-back-detail], [data-project-section-jump], #documents [data-filter]")) {
      scheduleEnhancement();
    }
  });

  scheduleEnhancement();
}

function createBadge(text) {
  return `<span class="badge">${text}</span>`;
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
    const serialPeriod = novel.serialPeriod ? ` (${novel.serialPeriod})` : "";
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
          <span class="novel-title-line">${novel.titlePrefix || "원작 웹소설 IP"} - 『${novel.title}』${serialPeriod}</span>
        </h3>
        <ul class="novel-platform-list">${platforms}</ul>
      </article>
    `;
  }).join("");
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

injectProjectAppIconStyles();
renderProjects();
renderVideos();
renderNovelIPs();
bindDisabledLinks();
bindMobileNavigation();
bindHeaderState();
setCurrentYear();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindProjectDetailAppIconObserver);
} else {
  bindProjectDetailAppIconObserver();
}

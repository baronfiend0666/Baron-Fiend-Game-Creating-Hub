/* =========================================================
   Game Planning Portfolio Site
   - data/projects.js의 프로젝트/문서/영상/원작 웹소설 데이터를 렌더링합니다.
   - 프로젝트 분류에 따른 개별 파일 모음과 Project File Detail Page에 대표 이미지와 앱 아이콘 이미지를 출력합니다.
   ========================================================= */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const data = window.PORTFOLIO_DATA ?? { projects: [], portfolioSections: [], novelIPs: [] };

const PROJECT_FOLDER_MAP = {
  "patris": "patris",
  "crimson-frequency": "crimson-frequency",
  "anomaly-record": "anomaly-record",
};

const SECTION_FOLDER_MAP = {
  "pre-production": "01_pre_production_portfolio",
  "concept": "02_concept_planning_portfolio",
  "system": "03_system_planning_portfolio",
};

const DEFAULT_APP_ICONS = {
  "patris": [
    {
      label: "Isadora",
      paths: [
        "assets/images/patris/app-icons/patris-app-icon-isadora.png",
        "assets/images/patris/app-icons/patris-app-icon-isadora",
        "assets/images/app-icons/patris-app-icon-isadora.png",
        "assets/images/app-icons/patris-app-icon-isadora",
        "assets/images/patris-app-icon-isadora.png",
        "assets/images/patris-app-icon-isadora",
        "assets/images/patris/app-icons/patris-app-icon.png",
        "assets/images/patris/app-icons/patris-app-icon",
        "assets/images/app-icons/patris-app-icon.png",
        "assets/images/app-icons/patris-app-icon",
        "assets/images/patris-app-icon.png",
        "assets/images/patris-app-icon"
      ],
    },
    {
      label: "Iris",
      paths: [
        "assets/images/patris/app-icons/patris-app-icon-iris.png",
        "assets/images/patris/app-icons/patris-app-icon-iris",
        "assets/images/app-icons/patris-app-icon-iris.png",
        "assets/images/app-icons/patris-app-icon-iris",
        "assets/images/patris-app-icon-iris.png",
        "assets/images/patris-app-icon-iris",
        "assets/images/patris/app-icons/patris-app-icon.png",
        "assets/images/patris/app-icons/patris-app-icon",
        "assets/images/app-icons/patris-app-icon.png",
        "assets/images/app-icons/patris-app-icon",
        "assets/images/patris-app-icon.png",
        "assets/images/patris-app-icon"
      ],
    },
  ],
  "crimson-frequency": [
    {
      label: "Crimson Frequency",
      paths: [
        "assets/images/app-icons/crimson-frequency-app-icon.png",
        "assets/images/app-icons/crimson-frequency-app-icon",
        "assets/images/crimson-frequency/app-icons/crimson-frequency-app-icon.png",
        "assets/images/crimson-frequency/app-icons/crimson-frequency-app-icon",
        "assets/images/crimson_frequency/app-icons/crimson-frequency-app-icon.png",
        "assets/images/crimson_frequency/app-icons/crimson-frequency-app-icon",
        "assets/images/crimson-frequency-app-icon.png",
        "assets/images/crimson-frequency-app-icon"
      ],
    },
  ],
  "anomaly-record": [
    {
      label: "Anomaly Record",
      paths: [
        "assets/images/app-icons/anomaly-record-app-icon.png",
        "assets/images/app-icons/anomaly-record-app-icon",
        "assets/images/anomaly-record/app-icons/anomaly-record-app-icon.png",
        "assets/images/anomaly-record/app-icons/anomaly-record-app-icon",
        "assets/images/anomaly_record/app-icons/anomaly-record-app-icon.png",
        "assets/images/anomaly_record/app-icons/anomaly-record-app-icon",
        "assets/images/anomaly-record-app-icon.png",
        "assets/images/anomaly-record-app-icon"
      ],
    },
  ],
};

function getBasePage() {
  const path = window.location.pathname || "main.html";
  return path.endsWith("/") ? path : path;
}

const BASE_PAGE = getBasePage();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createBadge(text) {
  return text ? `<span class="badge">${escapeHtml(text)}</span>` : "";
}

function getProject(projectId) {
  return data.projects.find((project) => project.id === projectId);
}

function getProjectPrefix(project) {
  return (project.name || "Project").replaceAll(" ", "_");
}

function getFilePath(project, section, item) {
  if (item.path) return item.path;

  const projectFolder = PROJECT_FOLDER_MAP[project.id] || project.id;
  const sectionFolder = SECTION_FOLDER_MAP[section.id] || section.id;
  const ext = item.ext || "pdf";
  const slug = item.slug || item.fileName || item.title;

  return `assets/docs/${projectFolder}/${sectionFolder}/${getProjectPrefix(project)}_${slug}.${ext}`;
}

function projectDetailUrl(projectId, sectionId = null) {
  const sectionQuery = sectionId ? `&section=${encodeURIComponent(sectionId)}` : "";
  return `${BASE_PAGE}?project=${encodeURIComponent(projectId)}${sectionQuery}#project-file-detail`;
}

function getRouteFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const sectionId = params.get("section");
  return { projectId, sectionId };
}

function getProjectIconData(project) {
  const explicitIcons = Array.isArray(project.appIcons)
    ? project.appIcons.map((icon) => {
        const paths = [icon.src, ...(Array.isArray(icon.fallbacks) ? icon.fallbacks : [])].filter(Boolean);
        return { label: icon.label || project.name, paths };
      })
    : [];

  const defaultIcons = DEFAULT_APP_ICONS[project.id] ?? [];
  const merged = explicitIcons.length ? explicitIcons : defaultIcons;

  return merged.map((icon) => {
    const defaultForLabel = defaultIcons.find((item) => item.label === icon.label)?.paths ?? [];
    const paths = [...new Set([...(icon.paths ?? []), ...defaultForLabel].filter(Boolean))];
    return { label: icon.label, paths };
  }).filter((icon) => icon.paths.length > 0);
}

function injectProjectAppIconStyles() {
  if (document.querySelector("#project-app-icon-restore-style")) return;

  const style = document.createElement("style");
  style.id = "project-app-icon-restore-style";
  style.textContent = `
    .project-visual-wrap { position: relative; }

    .project-visual-link {
      position: relative;
      display: block;
      color: inherit;
      text-decoration: none;
      border-radius: inherit;
      overflow: hidden;
      cursor: pointer;
    }

    .project-visual-link .project-visual {
      display: block;
      width: 100%;
      transition: transform 220ms ease, filter 220ms ease;
    }

    .project-visual-link:hover .project-visual,
    .project-visual-link:focus-visible .project-visual {
      transform: scale(1.035);
      filter: brightness(1.08) contrast(1.03);
    }

    .project-document-title-row,
    .project-detail-heading-row,
    .portfolio-file-set-title-row {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .project-document-title-row {
      margin: 8px 0 6px;
    }

    .project-document-title-row h3,
    .project-detail-heading-row h3,
    .portfolio-file-set-title-row h3 {
      margin: 0;
      min-width: 0;
    }

    .project-detail-page,
    .file-set-detail-page {
      margin: 28px 0 32px;
      scroll-margin-top: calc(var(--header-height, 72px) + 18px);
    }

    .project-detail-page[hidden],
    .file-set-detail-page[hidden] {
      display: none !important;
    }

    .project-detail-shell,
    .file-set-detail-shell {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(170, 190, 255, 0.26);
      border-radius: var(--radius-lg, 28px);
      background:
        linear-gradient(135deg, rgba(122, 162, 255, 0.16), rgba(165, 117, 255, 0.08) 42%, rgba(255, 255, 255, 0.035)),
        var(--panel-strong, rgba(16, 22, 40, 0.92));
      box-shadow: var(--shadow, 0 24px 80px rgba(0, 0, 0, 0.28));
      backdrop-filter: blur(18px);
      padding: clamp(22px, 3vw, 34px);
    }

    .project-detail-top {
      display: grid;
      grid-template-columns: minmax(180px, 280px) minmax(0, 1fr);
      gap: clamp(22px, 3.4vw, 42px);
      align-items: stretch;
      padding-bottom: 22px;
      border-bottom: 1px solid var(--line, rgba(255, 255, 255, 0.14));
    }

    .file-set-detail-top {
      display: grid;
      grid-template-columns: minmax(180px, 280px) minmax(0, 1fr);
      gap: clamp(22px, 3.4vw, 42px);
      align-items: stretch;
      padding-bottom: 22px;
      border-bottom: 1px solid var(--line, rgba(255, 255, 255, 0.14));
    }

    .project-detail-visual-panel,
    .file-set-detail-visual-panel {
      display: flex;
      align-items: stretch;
      justify-content: center;
      min-width: 0;
    }

    .project-detail-visual-panel .project-representative-image-frame,
    .file-set-detail-visual-panel .project-representative-image-frame {
      display: flex;
      width: 100%;
      min-height: clamp(300px, 34vw, 440px);
      height: 100%;
      border-radius: 28px;
      box-shadow: 0 24px 58px rgba(0, 0, 0, 0.34);
    }

    .project-detail-visual-panel .project-representative-image-img,
    .file-set-detail-visual-panel .project-representative-image-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    .project-detail-title-wrap,
    .file-set-detail-title-wrap {
      display: flex;
      min-width: 0;
      flex-direction: column;
      justify-content: center;
    }

    .project-heading-media {
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    .project-representative-image-frame {
      display: inline-flex;
      width: clamp(64px, 8vw, 112px);
      height: clamp(48px, 6vw, 84px);
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
    }

    .project-representative-image-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-document-title-row .project-representative-image-frame {
      width: 64px;
      height: 48px;
      border-radius: 14px;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
    }

    .portfolio-file-set-title-row .project-representative-image-frame {
      width: clamp(64px, 7vw, 96px);
      height: clamp(48px, 5vw, 72px);
      border-radius: 16px;
    }

    .project-app-icon-set {
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      gap: 8px;
    }

    .project-app-icon-frame {
      display: inline-flex;
      width: clamp(48px, 5.4vw, 76px);
      height: clamp(48px, 5.4vw, 76px);
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.24);
      border-radius: 24%;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
    }

    .project-document-title-row .project-app-icon-frame {
      width: 44px;
      height: 44px;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
    }

    .project-app-icon-frame.is-hidden {
      display: none;
    }

    .project-app-icon-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-detail-title-wrap h3,
    .file-set-detail-title-wrap h3 {
      margin: 0;
      font-size: clamp(1.8rem, 4vw, 3rem);
      line-height: 1.08;
    }

    .project-detail-title-wrap p,
    .file-set-detail-title-wrap p,
    .portfolio-file-set-intro {
      max-width: 860px;
      margin: 12px 0 0;
      color: var(--muted, #cbd5e1);
    }

    .project-detail-label,
    .file-set-detail-label {
      display: inline-flex;
      margin-bottom: 12px;
      color: var(--primary, #7aa2ff);
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .project-detail-actions,
    .file-set-detail-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .project-detail-actions {
      justify-content: flex-end;
    }

    .file-set-detail-actions {
      justify-content: flex-start;
      margin-top: 18px;
    }

    .project-detail-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .project-detail-index,
    .file-set-grid,
    .portfolio-set-layout {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 22px;
    }

    .file-set-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .project-detail-index-card,
    .file-set-card,
    .portfolio-set-panel {
      border: 1px solid var(--line, rgba(255, 255, 255, 0.14));
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.045);
      color: inherit;
      text-decoration: none;
    }

    .project-detail-index-card {
      display: flex;
      min-height: 148px;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }

    .project-detail-index-card:hover,
    .project-detail-index-card:focus-visible {
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.34);
      background: rgba(255, 255, 255, 0.065);
    }

    .project-detail-index-card > span:first-child {
      color: var(--primary, #7aa2ff);
      font-size: 0.88rem;
      font-weight: 900;
      letter-spacing: 0.08em;
    }

    .project-detail-index-card strong {
      display: block;
      margin: 10px 0 8px;
      line-height: 1.35;
    }

    .project-detail-index-card span {
      display: block;
      color: var(--muted, #cbd5e1);
      font-size: 0.9rem;
      line-height: 1.5;
      overflow-wrap: break-word;
    }

    .project-detail-index-card em {
      display: inline-flex;
      width: fit-content;
      margin-top: auto;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(122, 162, 255, 0.16);
      color: var(--text, #fff);
      font-size: 0.82rem;
      font-style: normal;
      font-weight: 900;
    }

    .file-set-card,
    .portfolio-set-file-card {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 14px;
      padding: 16px;
    }

    .file-set-card-order,
    .portfolio-set-file-order {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(122, 162, 255, 0.16);
      color: var(--text, #fff);
      font-size: 0.85rem;
      font-weight: 900;
    }

    .file-set-card-body strong,
    .file-set-card-body span,
    .portfolio-set-file-body strong,
    .portfolio-set-file-body span {
      display: block;
      overflow-wrap: break-word;
    }

    .file-set-card-body span,
    .portfolio-set-file-body span {
      margin-top: 4px;
      color: var(--muted, #cbd5e1);
      font-size: 0.88rem;
    }

    .file-set-thumb {
      width: 72px;
      height: 72px;
      object-fit: cover;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: 0 12px 26px rgba(0, 0, 0, 0.28);
    }

    body.is-project-detail-mode .document-grid,
    body.is-file-set-detail-mode .document-grid {
      display: none !important;
    }

    .novel-extra-note {
      margin: -4px 0 14px;
      color: var(--muted, #cbd5e1);
      font-size: 0.94rem;
      font-weight: 800;
    }

    @media (max-width: 980px) {
      .project-detail-top,
      .file-set-detail-top,
      .project-detail-index,
      .file-set-grid,
      .portfolio-set-layout {
        grid-template-columns: 1fr;
      }

      .project-detail-visual-panel,
      .file-set-detail-visual-panel {
        justify-content: flex-start;
      }

      .project-detail-visual-panel .project-representative-image-frame,
      .file-set-detail-visual-panel .project-representative-image-frame {
        width: min(100%, 360px);
        min-height: 420px;
      }

      .project-detail-actions,
      .file-set-detail-actions {
        justify-content: flex-start;
      }

      .project-document-title-row,
      .project-detail-heading-row,
      .portfolio-file-set-title-row {
        align-items: flex-start;
      }

      .project-heading-media {
        gap: 8px;
      }

      .file-set-card,
      .portfolio-set-file-card {
        grid-template-columns: auto minmax(0, 1fr);
      }

      .file-set-card .file-link,
      .portfolio-set-file-card .file-link {
        grid-column: 1 / -1;
        justify-self: start;
      }
    }
  `;
  document.head.appendChild(style);
}

function renderAppIcons(project) {
  const icons = getProjectIconData(project);
  if (!icons.length) return "";

  const iconMarkup = icons.map((icon) => {
    const [src, ...fallbacks] = icon.paths;
    const fallbackAttr = escapeHtml(JSON.stringify(fallbacks));
    const alt = `${project.name} 앱 아이콘${icon.label ? ` - ${icon.label}` : ""}`;

    return `
      <span class="project-app-icon-frame" title="${escapeHtml(alt)}">
        <img
          class="project-app-icon-img"
          src="${escapeHtml(src)}"
          alt="${escapeHtml(alt)}"
          loading="lazy"
          decoding="async"
          data-fallback-srcs="${fallbackAttr}"
          data-fallback-index="0"
        />
      </span>
    `;
  }).join("");

  return `<span class="project-app-icon-set" aria-label="${escapeHtml(project.name)} 앱 아이콘 이미지">${iconMarkup}</span>`;
}


function renderProjectRepresentativeImage(project) {
  const src = project.cardImage || project.background;
  if (!src) return "";

  const alt = `${project.name} 프로젝트 대표 이미지`;
  return `
    <span class="project-representative-image-frame" title="${escapeHtml(alt)}">
      <img
        class="project-representative-image-img"
        src="${escapeHtml(src)}"
        alt="${escapeHtml(alt)}"
        loading="lazy"
        decoding="async"
      />
    </span>
  `;
}

function renderProjectHeadingMedia(project) {
  const representativeImage = renderProjectRepresentativeImage(project);
  const appIcons = renderAppIcons(project);

  if (!representativeImage && !appIcons) return "";

  return `
    <span class="project-heading-media" aria-label="${escapeHtml(project.name)} 대표 이미지 및 앱 아이콘 이미지">
      ${representativeImage}
      ${appIcons}
    </span>
  `;
}

function activateImageFallbacks(scope = document) {
  $$("img[data-fallback-srcs]", scope).forEach((img) => {
    if (img.dataset.fallbackBound === "true") return;
    img.dataset.fallbackBound = "true";

    img.addEventListener("error", () => {
      let fallbacks = [];
      try {
        fallbacks = JSON.parse(img.dataset.fallbackSrcs || "[]");
      } catch {
        fallbacks = [];
      }

      const index = Number(img.dataset.fallbackIndex || "0");
      if (index < fallbacks.length) {
        img.dataset.fallbackIndex = String(index + 1);
        img.src = fallbacks[index];
        return;
      }

      const frame = img.closest(".project-app-icon-frame");
      if (frame) frame.classList.add("is-hidden");
    });
  });
}

function renderProjects() {
  const grid = $("[data-project-grid]");
  if (!grid) return;

  grid.innerHTML = data.projects.map((project) => {
    const tags = (project.tags ?? []).map(createBadge).join("");
    const projectImage = project.cardImage || project.background;

    return `
      <article class="project-card visible-project-card" data-project="${escapeHtml(project.id)}">
        <div class="project-visual-wrap">
          <a class="project-visual-link" href="${projectDetailUrl(project.id)}" data-project-image-link="${escapeHtml(project.id)}" aria-label="${escapeHtml(project.name)} Project File Detail Page 열기">
            <img class="project-visual" src="${escapeHtml(projectImage)}" alt="${escapeHtml(project.name)} 프로젝트 대표 이미지" loading="lazy" />
          </a>
        </div>
        <div class="project-content">
          <span class="project-order">${escapeHtml(project.order)}</span>
          <h3>${escapeHtml(project.videoTitle || project.name)}</h3>
          <p class="project-summary">${escapeHtml(project.projectDisplayLine || `${project.nameKo} · ${project.genre}`)}</p>
          <div class="project-meta">
            ${createBadge(project.engine)}
            ${tags}
          </div>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderDocuments() {
  const grid = $("[data-document-grid]");
  if (!grid) return;

  grid.innerHTML = data.projects.map((project) => {
    const sectionLinks = data.portfolioSections.map((section) => {
      const count = Array.isArray(section.items) ? section.items.length : 0;
      return `
        <a class="file-link" href="${projectDetailUrl(project.id, section.id)}" data-project-section-direct="${escapeHtml(project.id)}:${escapeHtml(section.id)}">
          ${escapeHtml(section.title)} · ${count}개 파일
        </a>
      `;
    }).join("");

    return `
      <article class="portfolio-block project-document-block" id="portfolio-${escapeHtml(project.id)}" data-project-block="${escapeHtml(project.id)}">
        <div class="portfolio-block-head">
          <span class="badge">${escapeHtml(project.name)}</span>
          <div class="project-document-title-row">
            ${renderProjectHeadingMedia(project)}
            <h3>${escapeHtml(project.nameKo || project.name)}</h3>
          </div>
          <p>${escapeHtml(project.projectDisplayLine || project.genre || "Game Planning Portfolio")}</p>
        </div>
        <div class="portfolio-file-list">
          ${sectionLinks}
        </div>
      </article>
    `;
  }).join("");

  activateImageFallbacks(grid);
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
          src="${escapeHtml(project.youtube)}"
          title="${escapeHtml(project.videoTitle || project.name)} storyboard-based AI animation output"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `
      : `
        <div class="video-placeholder" aria-label="${escapeHtml(project.videoTitle || project.name)} YouTube URL 삽입 칸">
          <span>YouTube URL 삽입 대기</span>
          <code>data/projects.js → ${escapeHtml(project.id)}.youtube</code>
        </div>
      `;

    return `
      <article class="video-card">
        ${videoArea}
        <div class="video-card-body">
          <h3>${escapeHtml(project.videoTitle || project.name)}</h3>
          <p>${escapeHtml(project.videoDescription || "AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다.")}</p>
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
    const extraNote = novel.extraNote ? `<p class="novel-extra-note">${escapeHtml(novel.extraNote)}</p>` : "";
    const keywordList = Array.isArray(novel.keywords) && novel.keywords.length
      ? `<ul class="novel-keyword-list">${novel.keywords.map((keyword) => `<li class="novel-keyword">${escapeHtml(keyword)}</li>`).join("")}</ul>`
      : "";
    const platforms = (novel.platforms ?? []).map((platform) => {
      const hasUrl = platform.url && platform.url.trim().length > 0;
      const href = hasUrl ? platform.url : "#";
      const label = hasUrl ? "연재 페이지 열기" : "URL 삽입 대기";
      return `
        <li class="novel-platform">
          <div>
            <strong>${escapeHtml(platform.name)}</strong>
            <span>${hasUrl ? escapeHtml(platform.url) : "data/projects.js에서 연재 페이지 URL 삽입"}</span>
          </div>
          <a class="file-link ${hasUrl ? "" : "is-disabled"}" href="${escapeHtml(href)}" ${hasUrl ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>${label}</a>
        </li>
      `;
    }).join("");

    return `
      <article class="novel-card">
        <span class="badge">${escapeHtml(novel.project)}</span>
        <h3>
          <span class="novel-label-line">${escapeHtml(novel.label)}</span>
          <span class="novel-title-line">${escapeHtml(novel.titlePrefix || "원작 웹소설 IP")} - 『${escapeHtml(novel.title)}』${escapeHtml(serialPeriod)}</span>
        </h3>
        ${extraNote}
        ${keywordList}
        <ul class="novel-platform-list">${platforms}</ul>
      </article>
    `;
  }).join("");
}

function setActiveTab(projectId) {
  $$("#documents [data-filter]").forEach((tab) => {
    const filter = tab.dataset.filter;
    const active = projectId ? filter === projectId : filter === "all";
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

function renderProjectDetail(projectId) {
  const detail = $("[data-project-detail-page]");
  const fileSetDetail = $("[data-file-set-detail-page]");
  const project = getProject(projectId);
  if (!detail || !project) return;

  if (fileSetDetail) {
    fileSetDetail.hidden = true;
    fileSetDetail.innerHTML = "";
  }

  const tags = (project.tags ?? []).map(createBadge).join("");
  const sectionIndex = data.portfolioSections.map((section) => {
    const count = Array.isArray(section.items) ? section.items.length : 0;
    return `
      <a class="project-detail-index-card" href="${projectDetailUrl(project.id, section.id)}" data-project-section-jump="${escapeHtml(section.id)}">
        <span class="project-detail-index-order">${escapeHtml(section.order || "FILE SET")}</span>
        <strong>${escapeHtml(section.title || section.name)}</strong>
        <span>${count}개 파일 · ${escapeHtml(project.name)} 전용 세부 섹션</span>
        <em>세부 파일 보기</em>
      </a>
    `;
  }).join("");

  detail.innerHTML = `
    <div class="project-detail-shell" aria-label="${escapeHtml(project.name)} Project File Detail Page">
      <div class="project-detail-top">
        <div class="project-detail-visual-panel" aria-label="${escapeHtml(project.name)} 프로젝트 대표 이미지">
          ${renderProjectRepresentativeImage(project)}
        </div>
        <div class="project-detail-title-wrap">
          <span class="project-detail-label">${escapeHtml(project.order || "Project")} · Project File Detail Page</span>
          <div class="project-detail-heading-row">
            ${renderAppIcons(project)}
            <h3>${escapeHtml(project.name)}</h3>
          </div>
          <p>${escapeHtml(project.projectDisplayLine || `${project.nameKo || project.name} · ${project.genre || "Game Planning Portfolio"}`)}</p>
          <p>${escapeHtml(project.summary || "프로젝트별 포트폴리오 파일 세트를 세부 섹션 단위로 열람합니다.")}</p>
          <div class="project-detail-meta">
            ${createBadge(project.engine)}
            ${tags}
          </div>
          <div class="project-detail-actions">
            <a class="btn btn-primary" href="#documents">프로젝트 버튼으로 이동</a>
          </div>
        </div>
      </div>
      <div class="project-detail-index" aria-label="${escapeHtml(project.name)} 포트폴리오 세부 섹션 바로가기">
        ${sectionIndex}
      </div>
    </div>
  `;

  detail.hidden = false;
  activateImageFallbacks(detail);
}

function renderFileSetDetail(projectId, sectionId) {
  const detail = $("[data-file-set-detail-page]");
  const project = getProject(projectId);
  const section = data.portfolioSections.find((item) => item.id === sectionId);
  if (!detail || !project || !section) return;

  const items = Array.isArray(section.items) ? section.items : [];
  const fileCards = items.map((item, index) => {
    const path = getFilePath(project, section, item);
    const title = item.title || item.fileName || "Portfolio File";
    const isPdfPreview = String(path).toLowerCase().endsWith(".pdf");
    const ext = isPdfPreview ? "PDF" : (item.ext || path.split(".").pop()?.toUpperCase() || "FILE");
    const thumbnail = item.thumbnail || "";
    const thumbMarkup = thumbnail
      ? `<img class="file-set-thumb" src="${escapeHtml(thumbnail)}" alt="${escapeHtml(title)} 미리보기" loading="lazy" decoding="async" />`
      : `<span class="file-set-card-order">${String(index + 1).padStart(2, "0")}</span>`;

    return `
      <article class="file-set-card">
        ${thumbMarkup}
        <div class="file-set-card-body">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(ext).toUpperCase()} 파일 · 새 창에서 바로 열람</span>
        </div>
        <a class="file-link" href="${escapeHtml(path)}" target="_blank" rel="noopener">열기</a>
      </article>
    `;
  }).join("");

  const tags = (project.tags ?? []).map(createBadge).join("");

  detail.innerHTML = `
    <div class="file-set-detail-shell">
      <div class="file-set-detail-top">
        <div class="file-set-detail-visual-panel" aria-label="${escapeHtml(project.name)} 프로젝트 대표 이미지">
          ${renderProjectRepresentativeImage(project)}
        </div>
        <div class="file-set-detail-title-wrap">
          <span class="file-set-detail-label">Portfolio File Set Page</span>
          <div class="portfolio-file-set-title-row">
            ${renderAppIcons(project)}
            <h3>${escapeHtml(project.name)}_${escapeHtml(section.title || section.name)}</h3>
          </div>
          <p>${escapeHtml(project.nameKo || project.name)} 프로젝트의 ${escapeHtml(section.title || section.name)} 파일만 분리해서 확인하는 세부 열람 섹션입니다.</p>
          <div class="project-detail-meta">
            ${createBadge(project.engine)}
            ${tags}
          </div>
          <div class="file-set-detail-actions">
            <a class="btn btn-primary" href="${projectDetailUrl(project.id)}" data-project-back-detail="${escapeHtml(project.id)}">Project File Detail Page로 돌아가기</a>
            <a class="btn btn-ghost" href="#documents">프로젝트 버튼으로 이동</a>
          </div>
        </div>
      </div>
      <div class="file-set-grid" aria-label="${escapeHtml(project.name)} ${escapeHtml(section.title || section.name)} 파일 목록">
        ${fileCards || '<p class="file-set-detail-note">현재 등록된 파일 항목이 없습니다.</p>'}
      </div>
      <p class="file-set-detail-note">각 파일의 <strong>열기</strong> 버튼을 누르면 연결된 문서가 새 창으로 열립니다. 파일 경로는 화면에 직접 노출하지 않습니다.</p>
    </div>
  `;

  detail.hidden = false;
  activateImageFallbacks(detail);
}

function applyProjectView(projectId, sectionId = null, shouldScroll = false) {
  const detail = $("[data-project-detail-page]");
  const fileSetDetail = $("[data-file-set-detail-page]");
  const validProject = Boolean(projectId && getProject(projectId));
  const validSection = Boolean(validProject && sectionId && data.portfolioSections.some((section) => section.id === sectionId));

  setActiveTab(validProject ? projectId : null);
  document.body.classList.toggle("is-project-detail-mode", validProject);
  document.body.classList.toggle("is-file-set-detail-mode", validSection);

  if (!validProject) {
    if (detail) {
      detail.hidden = true;
      detail.innerHTML = "";
    }
    if (fileSetDetail) {
      fileSetDetail.hidden = true;
      fileSetDetail.innerHTML = "";
    }
    return;
  }

  renderProjectDetail(projectId);
  if (validSection) renderFileSetDetail(projectId, sectionId);

  if (shouldScroll) {
    const target = validSection ? fileSetDetail : detail;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function routeToProject(projectId, sectionId = null, shouldScroll = true) {
  history.pushState({}, "", projectDetailUrl(projectId, sectionId));
  applyProjectView(projectId, sectionId, shouldScroll);
}

function bindDocumentRouting() {
  document.addEventListener("click", (event) => {
    const tab = event.target.closest("#documents [data-filter]");
    if (tab) {
      const projectId = tab.dataset.filter;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!projectId || projectId === "all") {
        history.pushState({}, "", `${BASE_PAGE}#documents`);
        applyProjectView(null, null, true);
        return;
      }
      routeToProject(projectId, null, true);
      return;
    }

    const directSection = event.target.closest("[data-project-section-direct]");
    if (directSection) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const [projectId, sectionId] = directSection.dataset.projectSectionDirect.split(":");
      routeToProject(projectId, sectionId, true);
      return;
    }

    const sectionLink = event.target.closest("[data-project-section-jump]");
    if (sectionLink) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const { projectId } = getRouteFromUrl();
      const activeProject = projectId || $("#documents .tab.is-active")?.dataset.filter;
      const sectionId = sectionLink.dataset.projectSectionJump;
      if (!activeProject || !sectionId) return;
      routeToProject(activeProject, sectionId, true);
      return;
    }

    const projectImage = event.target.closest("[data-project-image-link]");
    if (projectImage) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const projectId = projectImage.dataset.projectImageLink;
      routeToProject(projectId, null, true);
      return;
    }

    const back = event.target.closest("[data-project-back-detail]");
    if (back) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const projectId = back.dataset.projectBackDetail;
      routeToProject(projectId, null, true);
    }
  }, true);

  window.addEventListener("popstate", () => {
    const route = getRouteFromUrl();
    applyProjectView(route.projectId, route.sectionId, false);
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

function init() {
  injectProjectAppIconStyles();
  renderProjects();
  renderDocuments();
  renderVideos();
  renderNovelIPs();
  bindDisabledLinks();
  bindDocumentRouting();
  bindMobileNavigation();
  bindHeaderState();
  setCurrentYear();
  activateImageFallbacks(document);

  const route = getRouteFromUrl();
  applyProjectView(route.projectId, route.sectionId, false);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

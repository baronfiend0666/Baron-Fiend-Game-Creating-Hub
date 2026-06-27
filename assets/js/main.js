/* =========================================================
   Game Planning Portfolio Site
   - data/projects.js의 프로젝트/문서/영상/원작 웹소설 데이터를 렌더링합니다.
   - 프로젝트 분류에 따른 개별 파일 모음에는 앱 아이콘만 출력하고, 세부 페이지에는 대표 이미지와 앱 아이콘 이미지를 출력합니다.
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

const PROJECT_CONCEPT_GALLERIES = {
  "patris": [
    {
      id: "character-concept-art",
      order: "CA",
      title: "캐릭터 컨셉 아트 갤러리",
      shortTitle: "캐릭터 컨셉 아트",
      description: "Patris 캐릭터 컨셉 아트 이미지를 집단별 하위 폴더 기준으로 열람합니다.",
      basePath: "assets/images/patris/concept/character-concept-art",
    },
    {
      id: "background-concept-art",
      order: "BG",
      title: "배경 컨셉 아트 갤러리",
      shortTitle: "배경 컨셉 아트",
      description: "Patris 지역, 이동 루트, 배경 콘셉트 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/patris/concept/background-concept-art",
    },
    {
      id: "emblem",
      order: "EM",
      title: "엠블럼 이미지 갤러리",
      shortTitle: "엠블럼 이미지",
      description: "Patris 지역, 시즌, 세력, 포인트 엠블럼 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/patris/concept/emblem",
    },
  ],
  "crimson-frequency": [
    {
      id: "character-concept-art",
      order: "CA",
      title: "캐릭터 컨셉 아트 갤러리",
      shortTitle: "캐릭터 컨셉 아트",
      description: "Crimson Frequency 캐릭터 컨셉 아트 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/crimson-frequency/concept/character-concept-art",
    },
    {
      id: "background-concept-art",
      order: "BG",
      title: "배경 컨셉 아트 갤러리",
      shortTitle: "배경 컨셉 아트",
      description: "Crimson Frequency 배경, 탑, 현대 도시 콘셉트 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/crimson-frequency/concept/background-concept-art",
    },
    {
      id: "emblem",
      order: "EM",
      title: "엠블럼 이미지 갤러리",
      shortTitle: "엠블럼 이미지",
      description: "Crimson Frequency 세력, 시스템, 시즌 관련 엠블럼 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/crimson-frequency/concept/emblem",
    },
  ],
  "anomaly-record": [
    {
      id: "character-concept-art",
      order: "CA",
      title: "캐릭터 컨셉 아트 갤러리",
      shortTitle: "캐릭터 컨셉 아트",
      description: "Anomaly Record 캐릭터 컨셉 아트 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/anomaly-record/concept/character-concept-art",
    },
    {
      id: "background-concept-art",
      order: "BG",
      title: "배경 컨셉 아트 갤러리",
      shortTitle: "배경 컨셉 아트",
      description: "Anomaly Record 사건 현장, 도시 배경, 괴이 영향권 콘셉트 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/anomaly-record/concept/background-concept-art",
    },
    {
      id: "emblem",
      order: "EM",
      title: "엠블럼 이미지 갤러리",
      shortTitle: "엠블럼 이미지",
      description: "Anomaly Record 기관, 괴이, 케이스 관련 엠블럼 이미지를 분류별로 열람합니다.",
      basePath: "assets/images/anomaly-record/concept/emblem",
    },
  ],
};

const PATRIS_REGIONAL_VILLAIN_PARENT = "04-지역별 빌런 집단";
const PATRIS_REGIONAL_VILLAIN_GROUPS = [
  {
    order: "04-01",
    folderIncludes: "오벨루스 서클",
    title: "04-지역별 빌런 집단 · 오벨루스 서클(Obelus Circle)",
    description: "네오 판데모니움 연방국의 역내 빌런 집단",
    memberNames: ["뮤리엘 베일크로프트", "크리스틴 노크턴", "낸시 바이어몬트", "메를 크로스펠", "피니어스 모르그렌", "월터 더스크레인"],
  },
  {
    order: "04-02",
    folderIncludes: "블랙 코븐",
    title: "04-지역별 빌런 집단 · 블랙 코븐(Black Coven)",
    description: "스키엔티아 연방 아카데미의 역내 빌런 집단",
    memberNames: ["제이드 케일윅", "앨버트 웨이크필드", "그레고리 크레이븐", "라티파 펜로즈", "마르셀라 랭포드", "페러그린 엘드리지", "르우벤 아크라이트"],
  },
  {
    order: "04-03",
    folderIncludes: "이블리스 템플",
    title: "04-지역별 빌런 집단 · 이블리스 템플(Eblis Temple)",
    description: "신성황국 데오테스의 역내 빌런 집단",
    memberNames: ["암브로스 발렌크로스", "베네딕트 몽클레어"],
  },
  {
    order: "04-04A",
    folderIncludes: "케닛지 칼레브",
    title: "04-지역별 빌런 집단 · 케닛지 칼레브(Kenizzi Kaleb)",
    description: "기술 제국 에피그노시스의 역내 빌런 집단 1",
    memberNames: ["애브너 브래독", "카시안 그레이브스", "도미니크 워릭", "가네트 하크니스", "니콜 레드포드", "셰릴린 루크펠드", "토렌 스톤리치"],
  },
  {
    order: "04-04B",
    folderIncludes: "13인의 평의회",
    title: "04-지역별 빌런 집단 · 13인의 평의회(C13, Council of Thirteen)",
    description: "기술 제국 에피그노시스의 역내 빌런 집단 2",
    memberNames: ["클레온 베르다인", "디미트리 벨카리온", "아르카 베나 로보티카", "판도라 루멘타르", "유스터스 메리디온", "제시카 옵시디안", "라리사 발크하임", "페르디타 아스트라벨", "볼프강 모르덴트", "크리스토퍼 세베루스", "데스몬드 칼드리온", "어니스트 오르디안", "글렌 노바렌"],
  },
];

const GITHUB_TREE_API = "https://api.github.com/repos/baronfiend0666/Baron-Fiend-Game-Creating-Hub/git/trees/main?recursive=1";
const GITHUB_RAW_ROOT = "https://raw.githubusercontent.com/baronfiend0666/Baron-Fiend-Game-Creating-Hub/main/";
const IMAGE_FILE_RE = /\.(png|jpe?g|webp|gif|svg)$/i;
const collator = new Intl.Collator("ko-KR", { numeric: true, sensitivity: "base" });
let githubTreePromise = null;

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

function encodePathForUrl(path) {
  return String(path || "").split("/").map((part) => encodeURIComponent(part)).join("/");
}

function stripImageExtension(fileName) {
  return String(fileName || "").replace(/\.(png|jpe?g|webp|gif|svg)$/i, "");
}

function getGalleries(projectId) {
  return PROJECT_CONCEPT_GALLERIES[projectId] ?? [];
}

function getGallery(projectId, galleryId) {
  return getGalleries(projectId).find((gallery) => gallery.id === galleryId);
}

function isConceptGallery(projectId, sectionId, galleryId) {
  return sectionId === "concept" && Boolean(getGallery(projectId, galleryId));
}

function getFilePath(project, section, item) {
  if (item.path) return item.path;

  const projectFolder = PROJECT_FOLDER_MAP[project.id] || project.id;
  const sectionFolder = SECTION_FOLDER_MAP[section.id] || section.id;
  const ext = item.ext || "pdf";
  const slug = item.slug || item.fileName || item.title;

  return `assets/docs/${projectFolder}/${sectionFolder}/${getProjectPrefix(project)}_${slug}.${ext}`;
}

function projectDetailUrl(projectId, sectionId = null, galleryId = null) {
  const sectionQuery = sectionId ? `&section=${encodeURIComponent(sectionId)}` : "";
  const galleryQuery = galleryId ? `&gallery=${encodeURIComponent(galleryId)}` : "";
  return `${BASE_PAGE}?project=${encodeURIComponent(projectId)}${sectionQuery}${galleryQuery}#project-file-detail`;
}

function getRouteFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const sectionId = params.get("section");
  const galleryId = params.get("gallery");
  return { projectId, sectionId, galleryId };
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

    .project-document-title-row .project-representative-image-frame {
      display: none !important;
    }

    .project-document-block .portfolio-file-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      align-items: stretch;
    }

    .project-document-block .portfolio-file-list .file-link {
      display: inline-flex;
      min-height: 54px;
      align-items: center;
      justify-content: center;
      text-align: center;
      white-space: normal;
      line-height: 1.35;
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
      align-items: center;
      gap: 10px;
    }

    .project-detail-actions {
      justify-content: flex-start;
    }

    .file-set-detail-actions {
      justify-content: flex-start;
      margin-top: 18px;
    }

    .project-detail-actions .btn,
    .file-set-detail-actions .btn {
      display: inline-flex !important;
      flex: 0 0 auto !important;
      width: auto !important;
      max-width: 100% !important;
      min-width: 0 !important;
      min-height: 42px !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 10px 16px !important;
      border-radius: 999px !important;
      font-size: 0.9rem !important;
      font-weight: 900 !important;
      line-height: 1.2 !important;
      text-align: center !important;
      white-space: nowrap !important;
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


    .concept-gallery-entry-section {
      margin-top: 28px;
      padding-top: 24px;
      border-top: 1px solid rgba(170, 190, 255, 0.18);
    }

    .concept-gallery-entry-head {
      max-width: 780px;
      margin-bottom: 18px;
    }

    .concept-gallery-entry-head h4,
    .gallery-group-head h4 {
      margin: 8px 0 0;
      color: var(--text, #f5f8ff);
      font-size: 1.18rem;
      letter-spacing: -0.03em;
    }

    .concept-gallery-entry-head p,
    .gallery-path-note {
      margin: 8px 0 0;
      color: var(--muted, #b8c2d8);
    }

    .concept-gallery-card-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .concept-gallery-card {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 14px;
      align-items: center;
      min-height: 148px;
      padding: 18px;
      border: 1px solid rgba(170, 190, 255, 0.18);
      border-radius: 22px;
      background:
        linear-gradient(135deg, rgba(122, 162, 255, 0.12), rgba(165, 117, 255, 0.06)),
        rgba(255, 255, 255, 0.045);
      color: inherit;
      text-decoration: none;
      transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
    }

    .concept-gallery-card:hover,
    .concept-gallery-card:focus-visible {
      transform: translateY(-2px);
      border-color: rgba(122, 162, 255, 0.46);
      background:
        linear-gradient(135deg, rgba(122, 162, 255, 0.18), rgba(165, 117, 255, 0.09)),
        rgba(255, 255, 255, 0.065);
      outline: none;
    }

    .concept-gallery-card-order {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      border: 1px solid rgba(122, 162, 255, 0.38);
      border-radius: 16px;
      color: #dbe7ff;
      font-size: 0.78rem;
      font-weight: 1000;
      background: rgba(122, 162, 255, 0.14);
    }

    .concept-gallery-card-body strong {
      display: block;
      color: var(--text, #f5f8ff);
      line-height: 1.35;
    }

    .concept-gallery-card-body span,
    .concept-gallery-card em {
      display: block;
      margin-top: 5px;
      color: var(--muted, #b8c2d8);
      font-size: 0.88rem;
      font-style: normal;
    }

    .concept-gallery-card em {
      grid-column: 1 / -1;
      color: #dbe7ff;
      font-weight: 900;
    }

    .concept-gallery-detail-shell {
      min-height: 420px;
    }

    .gallery-detail-output {
      margin-top: 26px;
    }

    .gallery-status {
      margin: 0;
      padding: 18px;
      border: 1px solid rgba(170, 190, 255, 0.18);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.045);
      color: var(--muted, #b8c2d8);
      font-weight: 800;
    }

    .gallery-status.is-ready {
      color: #dbe7ff;
      border-color: rgba(122, 162, 255, 0.32);
      background: rgba(122, 162, 255, 0.08);
    }

    .gallery-status.is-error {
      color: #ffd8de;
      border-color: rgba(255, 68, 95, 0.38);
      background: rgba(255, 68, 95, 0.08);
    }

    .gallery-group {
      margin-top: 28px;
      padding-top: 22px;
      border-top: 1px solid rgba(170, 190, 255, 0.16);
    }

    .gallery-group-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 14px;
    }

    .gallery-group-head span {
      color: var(--muted, #b8c2d8);
      font-size: 0.88rem;
      font-weight: 900;
      white-space: nowrap;
    }

    .gallery-group-description {
      margin: -6px 0 14px;
      color: var(--muted, #b8c2d8);
      font-size: 0.92rem;
      font-weight: 700;
    }

    .gallery-image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 14px;
    }

    .gallery-image-card {
      min-width: 0;
      padding: 12px;
      border: 1px solid rgba(170, 190, 255, 0.16);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.045);
    }

    .gallery-image-card a {
      display: block;
      overflow: hidden;
      border-radius: 14px;
      background: rgba(7, 9, 18, 0.52);
    }

    .gallery-image-card img {
      display: block;
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: contain;
      transition: transform 180ms ease, filter 180ms ease;
    }

    .gallery-image-card a:hover img,
    .gallery-image-card a:focus-visible img {
      transform: scale(1.035);
      filter: brightness(1.08);
    }

    .gallery-image-card strong,
    .gallery-image-card span {
      display: block;
      overflow-wrap: anywhere;
    }

    .gallery-image-card strong {
      margin-top: 10px;
      color: var(--text, #f5f8ff);
      font-size: 0.92rem;
      line-height: 1.35;
    }

    .gallery-image-card span {
      margin-top: 4px;
      color: var(--muted-2, rgba(216, 226, 255, 0.66));
      font-size: 0.8rem;
      font-weight: 800;
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
      .portfolio-set-layout,
      .concept-gallery-card-grid {
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

      .project-detail-actions .btn,
      .file-set-detail-actions .btn {
        white-space: normal !important;
      }

      .project-document-title-row,
      .project-detail-heading-row,
      .portfolio-file-set-title-row {
        align-items: flex-start;
      }

      .project-heading-media {
        gap: 8px;
      }

      .project-document-block .portfolio-file-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .project-document-block .portfolio-file-list .file-link {
        min-height: 50px;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 0.82rem;
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
  const appIcons = renderAppIcons(project);

  if (!appIcons) return "";

  return `
    <span class="project-heading-media" aria-label="${escapeHtml(project.name)} 앱 아이콘 이미지">
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


async function getGithubTree() {
  if (!githubTreePromise) {
    githubTreePromise = fetch(GITHUB_TREE_API, { headers: { Accept: "application/vnd.github+json" } })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub tree API request failed: ${response.status}`);
        return response.json();
      })
      .then((payload) => Array.isArray(payload.tree) ? payload.tree : []);
  }
  return githubTreePromise;
}

function getPatrisRegionalVillainGroup(parts, fileName) {
  if (parts[0] !== PATRIS_REGIONAL_VILLAIN_PARENT) return null;
  const folderName = parts.length > 2 ? parts[1] : "";
  return PATRIS_REGIONAL_VILLAIN_GROUPS.find((group) =>
    folderName.includes(group.folderIncludes) || group.memberNames.some((memberName) => fileName.includes(memberName))
  ) || null;
}

function resolveGalleryGroup(gallery, parts, fileName) {
  if (gallery.id === "character-concept-art") {
    const regionalVillainGroup = getPatrisRegionalVillainGroup(parts, fileName);
    if (regionalVillainGroup) {
      return {
        key: `${PATRIS_REGIONAL_VILLAIN_PARENT}/${regionalVillainGroup.order}`,
        title: regionalVillainGroup.title,
        description: regionalVillainGroup.description,
        sortOrder: regionalVillainGroup.order,
      };
    }
  }

  const title = parts.length > 1 ? parts[0] : "이미지";
  return {
    key: parts.length > 1 ? parts[0] : "_root",
    title,
    description: "",
    sortOrder: title,
  };
}

async function getGalleryImageGroups(gallery) {
  const basePath = gallery.basePath.replace(/\/$/, "");
  const tree = await getGithubTree();
  const groups = new Map();

  tree
    .filter((entry) => entry.type === "blob" && entry.path?.startsWith(`${basePath}/`) && IMAGE_FILE_RE.test(entry.path))
    .forEach((entry) => {
      const relativePath = entry.path.slice(basePath.length + 1);
      const parts = relativePath.split("/").filter(Boolean);
      const fileName = parts[parts.length - 1] || relativePath;
      const groupInfo = resolveGalleryGroup(gallery, parts, fileName);

      if (!groups.has(groupInfo.key)) {
        groups.set(groupInfo.key, {
          key: groupInfo.key,
          title: groupInfo.title,
          description: groupInfo.description,
          sortOrder: groupInfo.sortOrder,
          images: [],
        });
      }

      groups.get(groupInfo.key).images.push({
        name: fileName,
        displayName: stripImageExtension(fileName),
        path: entry.path,
        src: `${GITHUB_RAW_ROOT}${encodePathForUrl(entry.path)}`,
      });
    });

  return [...groups.values()]
    .map((group) => ({
      ...group,
      images: group.images.sort((a, b) => collator.compare(a.path, b.path)),
    }))
    .sort((a, b) => collator.compare(a.sortOrder || a.title, b.sortOrder || b.title));
}

function createConceptGalleryEntryCards(project, section) {
  const galleries = getGalleries(project.id);
  if (section.id !== "concept" || galleries.length < 1) return "";

  const projectLabel = getProjectPrefix(project);
  const cards = galleries.map((gallery) => `
    <a class="concept-gallery-card" href="${projectDetailUrl(project.id, section.id, gallery.id)}" data-concept-gallery-jump="${escapeHtml(gallery.id)}">
      <span class="concept-gallery-card-order">${escapeHtml(gallery.order)}</span>
      <div class="concept-gallery-card-body">
        <strong>${escapeHtml(gallery.title)}</strong>
        <span>${escapeHtml(gallery.description)}</span>
      </div>
      <em>갤러리 보기</em>
    </a>
  `).join("");

  return `
    <section class="concept-gallery-entry-section" aria-label="${escapeHtml(project.name)} 콘셉트 아트 갤러리">
      <div class="concept-gallery-entry-head">
        <span class="file-set-detail-label">Visual Concept Gallery</span>
        <h4>${escapeHtml(projectLabel)}_콘셉트 아트 갤러리</h4>
        <p>캐릭터 / 배경 / 엠블럼 이미지를 별도 세부 갤러리로 분리해서 열람합니다.</p>
      </div>
      <div class="concept-gallery-card-grid">
        ${cards}
      </div>
    </section>
  `;
}

function renderGalleryGroups(groups, gallery) {
  const imageCount = groups.reduce((total, group) => total + group.images.length, 0);
  if (imageCount < 1) {
    return `
      <p class="gallery-status">
        현재 <code>${escapeHtml(gallery.basePath)}</code> 경로에서 표시 가능한 이미지 파일을 찾지 못했습니다.
        GitHub 저장소에 이미지 파일을 업로드한 뒤 다시 확인해 주세요.
      </p>
    `;
  }

  return `
    <p class="gallery-status is-ready">${groups.length}개 분류 · ${imageCount}개 이미지가 연결되었습니다.</p>
    ${groups.map((group) => `
      <section class="gallery-group">
        <div class="gallery-group-head">
          <h4>${escapeHtml(group.title)}</h4>
          <span>${group.images.length}개 이미지</span>
        </div>
        ${group.description ? `<p class="gallery-group-description">${escapeHtml(group.description)}</p>` : ""}
        <div class="gallery-image-grid">
          ${group.images.map((image) => `
            <article class="gallery-image-card">
              <a href="${escapeHtml(image.src)}" target="_blank" rel="noopener" aria-label="${escapeHtml(image.displayName)} 원본 이미지 열기">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.displayName)}" loading="lazy" />
              </a>
              <strong>${escapeHtml(image.displayName)}</strong>
              <span>${escapeHtml(group.title)}</span>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("")}
  `;
}

async function hydrateGalleryImages(gallery, token) {
  const detail = $("[data-file-set-detail-page]");
  const output = $("[data-gallery-output]");
  if (!detail || !output) return;

  try {
    const groups = await getGalleryImageGroups(gallery);
    if (detail.dataset.galleryLoadToken !== token) return;
    output.innerHTML = renderGalleryGroups(groups, gallery);
  } catch (error) {
    if (detail.dataset.galleryLoadToken !== token) return;
    output.innerHTML = `
      <p class="gallery-status is-error">
        GitHub 저장소의 이미지 목록을 불러오지 못했습니다. 저장소 경로와 배포 상태를 확인해 주세요.
      </p>
    `;
    console.error(error);
  }
}

function renderConceptGalleryDetail(projectId, sectionId, galleryId) {
  const detail = $("[data-file-set-detail-page]");
  const project = getProject(projectId);
  const section = data.portfolioSections.find((item) => item.id === sectionId);
  const gallery = getGallery(projectId, galleryId);
  if (!detail || !project || !section || !gallery) return;

  const token = `${projectId}:${sectionId}:${galleryId}:${Date.now()}`;
  detail.dataset.galleryLoadToken = token;
  detail.innerHTML = `
    <div class="file-set-detail-shell concept-gallery-detail-shell">
      <div class="file-set-detail-top">
        <div class="file-set-detail-visual-panel" aria-label="${escapeHtml(project.name)} 프로젝트 대표 이미지">
          ${renderProjectRepresentativeImage(project)}
        </div>
        <div class="file-set-detail-title-wrap">
          <span class="file-set-detail-label">Visual Concept Gallery</span>
          <div class="portfolio-file-set-title-row">
            ${renderAppIcons(project)}
            <h3>${escapeHtml(project.name)}_${escapeHtml(gallery.title)}</h3>
          </div>
          <p>${escapeHtml(gallery.description)}</p>
          <p class="gallery-path-note"><code>${escapeHtml(gallery.basePath)}/</code></p>
          <div class="file-set-detail-actions">
            <a class="btn btn-primary" href="${projectDetailUrl(project.id, section.id)}" data-project-section-jump="${escapeHtml(section.id)}">콘셉트 기획 포트폴리오로 돌아가기</a>
            <a class="btn btn-ghost" href="${projectDetailUrl(project.id)}" data-project-back-detail="${escapeHtml(project.id)}">프로젝트 상세 페이지로 돌아가기</a>
          </div>
        </div>
      </div>
      <div class="gallery-detail-output" data-gallery-output>
        <p class="gallery-status">GitHub 저장소의 이미지 목록을 불러오는 중입니다.</p>
      </div>
    </div>
  `;

  detail.hidden = false;
  activateImageFallbacks(detail);
  hydrateGalleryImages(gallery, token);
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
            <a class="btn btn-primary" href="#documents">프로젝트 목록으로 이동</a>
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
  const galleryEntries = createConceptGalleryEntryCards(project, section);

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
            <a class="btn btn-primary" href="${projectDetailUrl(project.id)}" data-project-back-detail="${escapeHtml(project.id)}">프로젝트 상세 페이지로 돌아가기</a>
            <a class="btn btn-ghost" href="#documents">프로젝트 목록으로 이동</a>
          </div>
        </div>
      </div>
      <div class="file-set-grid" aria-label="${escapeHtml(project.name)} ${escapeHtml(section.title || section.name)} 파일 목록">
        ${fileCards || '<p class="file-set-detail-note">현재 등록된 파일 항목이 없습니다.</p>'}
      </div>
      ${galleryEntries}
      <p class="file-set-detail-note">각 파일의 <strong>열기</strong> 버튼을 누르면 연결된 문서가 새 창으로 열립니다. 파일 경로는 화면에 직접 노출하지 않습니다.</p>
    </div>
  `;

  detail.hidden = false;
  activateImageFallbacks(detail);
}

function applyProjectView(projectId, sectionId = null, galleryId = null, shouldScroll = false) {
  const detail = $("[data-project-detail-page]");
  const fileSetDetail = $("[data-file-set-detail-page]");
  const validProject = Boolean(projectId && getProject(projectId));
  const validSection = Boolean(validProject && sectionId && data.portfolioSections.some((section) => section.id === sectionId));
  const validGallery = Boolean(validSection && isConceptGallery(projectId, sectionId, galleryId));

  setActiveTab(validProject ? projectId : null);
  document.body.classList.toggle("is-project-detail-mode", validProject);
  document.body.classList.toggle("is-file-set-detail-mode", validSection || validGallery);

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
  if (validGallery) renderConceptGalleryDetail(projectId, sectionId, galleryId);
  else if (validSection) renderFileSetDetail(projectId, sectionId);

  if (shouldScroll) {
    const target = validSection || validGallery ? fileSetDetail : detail;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function routeToProject(projectId, sectionId = null, galleryId = null, shouldScroll = true) {
  history.pushState({}, "", projectDetailUrl(projectId, sectionId, galleryId));
  applyProjectView(projectId, sectionId, galleryId, shouldScroll);
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
        applyProjectView(null, null, null, true);
        return;
      }
      routeToProject(projectId, null, null, true);
      return;
    }

    const directSection = event.target.closest("[data-project-section-direct]");
    if (directSection) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const [projectId, sectionId] = directSection.dataset.projectSectionDirect.split(":");
      routeToProject(projectId, sectionId, null, true);
      return;
    }

    const galleryLink = event.target.closest("[data-concept-gallery-jump]");
    if (galleryLink) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const { projectId, sectionId } = getRouteFromUrl();
      const activeProject = projectId || $("#documents .tab.is-active")?.dataset.filter;
      const activeSection = sectionId || "concept";
      const galleryId = galleryLink.dataset.conceptGalleryJump;
      if (!activeProject || !isConceptGallery(activeProject, activeSection, galleryId)) return;
      routeToProject(activeProject, activeSection, galleryId, true);
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
      routeToProject(activeProject, sectionId, null, true);
      return;
    }

    const projectImage = event.target.closest("[data-project-image-link]");
    if (projectImage) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const projectId = projectImage.dataset.projectImageLink;
      routeToProject(projectId, null, null, true);
      return;
    }

    const back = event.target.closest("[data-project-back-detail]");
    if (back) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const projectId = back.dataset.projectBackDetail;
      routeToProject(projectId, null, null, true);
    }
  }, true);

  window.addEventListener("popstate", () => {
    const route = getRouteFromUrl();
    applyProjectView(route.projectId, route.sectionId, route.galleryId, false);
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
  applyProjectView(route.projectId, route.sectionId, route.galleryId, false);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

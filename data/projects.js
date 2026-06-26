window.PORTFOLIO_DATA = (() => {
  const params = new URLSearchParams(window.location.search);
  const activeProjectId = params.get("project");

  const data = {
    projects: [
      {
        id: "patris",
        order: "01",
        name: "Patris",
        nameKo: "파트리스",
        genre: "3인칭 오픈월드 캐릭터 수집형 액션 RPG",
        engine: "Unreal Engine 5",
        background: "assets/images/patris-project-visual.png",
        tags: ["3인칭", "오픈월드", "캐릭터 수집", "액션 RPG"],
        summary: "플레이어는 데미안 오펠 포네로스가 되어 파트리스의 5개 지역을 탐험하고, 동료 캐릭터들과 성장하며 세계를 위협하는 적들과 대립한다.",
        youtube: "",
        cardImage: "assets/images/patris-project-visual.png",
        videoTitle: "파트리스(Patris)",
        videoDescription: "AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다.",
        projectDisplayLine: "파트리스 · 3인칭 오픈월드 캐릭터 수집형 액션 RPG",
      },
      {
        id: "crimson-frequency",
        order: "02",
        name: "Crimson Frequency",
        nameKo: "크림슨 프리퀀시",
        genre: "3인칭 현대 로그라이트 액션 RPG",
        engine: "Unity",
        background: "assets/images/crimson-frequency-project-visual.png",
        tags: ["3인칭", "현대", "로그라이트", "액션 RPG"],
        summary: "플레이어는 정체를 숨긴 먼치킨 스트리머 헬 하운드가 되어 서울 한복판에 나타난 탑을 등반하고 자신을 죽이려 한 자들을 추적해 복수한다.",
        youtube: "",
        cardImage: "assets/images/crimson-frequency-project-visual.png",
        videoTitle: "크림슨 프리퀀시(Crimson Frequency)",
        videoDescription: "AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다.",
        projectDisplayLine: "크림슨 프리퀀시 · 3인칭 현대 로그라이트 액션 RPG",
      },
      {
        id: "anomaly-record",
        order: "03",
        name: "Anomaly Record",
        nameKo: "아노말리 레코드",
        genre: "3인칭 오컬트 어반 판타지 RPG",
        engine: "Unity",
        background: "assets/images/anomaly-record-project-visual.png",
        tags: ["3인칭", "오컬트", "어반 판타지", "RPG"],
        summary: "플레이어는 한시우 또는 류세린을 선택해 괴이대응청 현장분석국 분석관으로서 서울 곳곳에 출현하는 괴이 사건을 해결한다.",
        youtube: "",
        cardImage: "assets/images/anomaly-record-project-visual.png",
        videoTitle: "아노말리 레코드(Anomaly Record)",
        videoDescription: "AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다.",
        projectDisplayLine: "아노말리 레코드 · 3인칭 오컬트 어반 판타지 RPG",
      },
    ],

    portfolioSections: [
      {
        id: "pre-production",
        order: "01",
        title: "사전 기획 포트폴리오",
        items: [
          { title: "개발 제안서", ext: "docx", slug: "Development_Proposal" },
          { title: "콘텐츠맵", ext: "svg", slug: "Content_Map" },
          { title: "게임 소개서", ext: "docx", slug: "Game_Introduction_Document" },
          { title: "GDD", ext: "docx", slug: "GDD" },
        ],
      },
      {
        id: "concept",
        order: "02",
        title: "콘셉트 기획 포트폴리오",
        items: [
          { title: "게임 스토리", ext: "docx", slug: "Game_Story" },
          { title: "게임 시나리오", ext: "docx", slug: "Game_Scenario" },
          { title: "스토리 보드", ext: "docx", slug: "Storyboard" },
          { title: "캐릭터 컨셉 기획서", ext: "docx", slug: "Character_Concept_Document" },
          { title: "배경 컨셉 기획서", ext: "docx", slug: "Background_Concept_Document" },
          { title: "캐릭터 테이블", ext: "xlsx", slug: "Character_Table" },
          { title: "아이템 테이블", ext: "xlsx", slug: "Item_Table" },
          { title: "퀘스트 테이블", ext: "xlsx", slug: "Quest_Table" },
          { title: "다이얼로그 테이블", ext: "xlsx", slug: "Dialogue_Table" },
          { title: "시나리오 테이블", ext: "xlsx", slug: "Scenario_Table" },
        ],
      },
      {
        id: "system",
        order: "03",
        title: "시스템 기획 포트폴리오",
        items: [
          { title: "게임 메커닉스", ext: "docx", slug: "Game_Mechanics" },
          { title: "프로세스 플로우", ext: "svg", slug: "Process_Flow" },
          { title: "ERD", ext: "svg", slug: "ERD" },
          { title: "데이터 스키마", ext: "docx", slug: "Data_Schema" },
          { title: "통합 데이터 테이블", ext: "docx", slug: "Integrated_Data_Table" },
        ],
      },
    ],

    novelIPs: [
      {
        id: "patris-part-1",
        project: "Patris",
        label: "파트리스(Patris) (1부)",
        title: "강령명가의 악질분자로 살아남기",
        serialPeriod: "2026.07~",
        platforms: [
          { name: "문피아(Munpia)", url: "" },
          { name: "네이버 시리즈(Naver Series)", url: "" },
          { name: "카카오페이지(Kakaopage)", url: "" },
        ],
        titlePrefix: "원작 웹소설 IP",
      },
      {
        id: "patris-part-2",
        project: "Patris",
        label: "파트리스(Patris) (2부)",
        title: "합법적 성물 도둑",
        platforms: [
          { name: "문피아(Munpia)", url: "" },
          { name: "네이버 시리즈(Naver Series)", url: "" },
          { name: "카카오페이지(Kakaopage)", url: "" },
        ],
        titlePrefix: "원작 웹소설 IP",
      },
      {
        id: "crimson-frequency-novel",
        project: "Crimson Frequency",
        label: "크림슨 프리퀀시(Crimson Frequency)",
        title: "미스터 헬 하운드의 스트리밍",
        serialPeriod: "2027.08~",
        platforms: [
          { name: "문피아(Munpia)", url: "" },
          { name: "네이버 시리즈(Naver Series)", url: "" },
          { name: "카카오페이지(Kakaopage)", url: "" },
        ],
        titlePrefix: "원작 웹소설 IP",
      },
    ],
  };


  data.appIconGroups = {
    "patris": {
      title: "Patris 앱 아이콘 이미지",
      description: "Patris 앱 아이콘 버전 교체 및 비교용 PNG 이미지입니다.",
      items: [
        {
          title: "App Icon - Isadora",
          label: "Isadora",
          path: "assets/images/patris/app-icons/patris-app-icon-isadora.png",
        },
        {
          title: "App Icon - Iris",
          label: "Iris",
          path: "assets/images/patris/app-icons/patris-app-icon-iris.png",
        },
      ],
    },
    "crimson-frequency": {
      title: "Crimson Frequency 앱 아이콘 이미지",
      description: "Crimson Frequency 앱 아이콘 PNG 이미지입니다.",
      items: [
        {
          title: "App Icon - Crimson Frequency",
          label: "Crimson Frequency",
          path: "assets/images/crimson-frequency/app-icons/crimson-frequency-app-icon.png",
        },
      ],
    },
    "anomaly-record": {
      title: "Anomaly Record 앱 아이콘 이미지",
      description: "Anomaly Record 앱 아이콘 PNG 이미지입니다.",
      items: [
        {
          title: "App Icon - Anomaly Record",
          label: "Anomaly Record",
          path: "assets/images/anomaly-record/app-icons/anomaly-record-app-icon.png",
        },
      ],
    },
  };

  return data;
})();

(() => {
  const STYLE_ID = "project-app-icon-panel-style";
  const PANEL_SELECTOR = "[data-project-app-icon-panel]";

  const getData = () => window.PORTFOLIO_DATA ?? {};
  const getAppIconGroups = () => getData().appIconGroups ?? {};

  const getCurrentProjectId = () => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("project");
    if (fromUrl) return fromUrl;

    const activeTab = document.querySelector('#documents [data-filter].is-active, #documents [aria-selected="true"][data-filter]');
    const fromTab = activeTab?.dataset?.filter;
    return fromTab && fromTab !== "all" ? fromTab : "";
  };

  const ensureStyle = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .project-app-icon-panel {
        margin-top: 22px;
        padding: clamp(18px, 2.2vw, 24px);
        border: 1px solid var(--line, rgba(255, 255, 255, 0.14));
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.045);
      }

      .project-app-icon-panel-head {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 16px;
      }

      .project-app-icon-panel-head strong {
        color: var(--text, #fff);
        font-size: 1.05rem;
        line-height: 1.35;
      }

      .project-app-icon-panel-head span {
        color: var(--muted, rgba(255, 255, 255, 0.72));
        font-size: 0.9rem;
        line-height: 1.5;
      }

      .project-app-icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 14px;
      }

      .project-app-icon-card {
        display: grid;
        grid-template-columns: 96px minmax(0, 1fr);
        align-items: center;
        gap: 14px;
        min-height: 128px;
        padding: 16px;
        border: 1px solid var(--line, rgba(255, 255, 255, 0.14));
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.045);
        color: inherit;
        text-decoration: none;
        transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
      }

      .project-app-icon-card:hover,
      .project-app-icon-card:focus-visible {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.34);
        background: rgba(255, 255, 255, 0.065);
      }

      .project-app-icon-card:focus-visible {
        outline: 2px solid var(--primary, #7aa2ff);
        outline-offset: 3px;
      }

      .project-app-icon-thumb {
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-radius: 24px;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.06);
      }

      .project-app-icon-card-body {
        min-width: 0;
      }

      .project-app-icon-card-body strong {
        display: block;
        color: var(--text, #fff);
        font-size: 0.98rem;
        line-height: 1.38;
        overflow-wrap: break-word;
      }

      .project-app-icon-card-body span {
        display: block;
        margin-top: 6px;
        color: var(--muted, rgba(255, 255, 255, 0.72));
        font-size: 0.86rem;
      }

      @media (max-width: 560px) {
        .project-app-icon-card {
          grid-template-columns: 80px minmax(0, 1fr);
        }

        .project-app-icon-thumb {
          width: 80px;
          height: 80px;
          border-radius: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const createPanel = (projectId, group) => {
    const itemsHtml = group.items.map((item) => `
      <a class="project-app-icon-card" href="${item.path}" target="_blank" rel="noopener" aria-label="${item.title} 열기">
        <img class="project-app-icon-thumb" src="${item.path}" alt="${item.title} 미리보기" loading="lazy" decoding="async">
        <span class="project-app-icon-card-body">
          <strong>${item.title}</strong>
          <span>PNG 이미지 · 새 창에서 열람</span>
        </span>
      </a>
    `).join("");

    const panel = document.createElement("section");
    panel.className = "project-app-icon-panel";
    panel.dataset.projectAppIconPanel = projectId;
    panel.innerHTML = `
      <div class="project-app-icon-panel-head">
        <strong>${group.title}</strong>
        <span>${group.description}</span>
      </div>
      <div class="project-app-icon-grid">
        ${itemsHtml}
      </div>
    `;
    return panel;
  };

  const removeExistingPanels = () => {
    document.querySelectorAll(PANEL_SELECTOR).forEach((panel) => panel.remove());
  };

  const injectAppIconPanel = () => {
    const projectId = getCurrentProjectId();
    const group = getAppIconGroups()[projectId];

    removeExistingPanels();
    if (!group || !Array.isArray(group.items) || group.items.length === 0) return;

    const projectDetail = document.querySelector("[data-project-detail-page]:not([hidden])");
    if (!projectDetail) return;

    const insertionTarget = projectDetail.querySelector(".project-detail-index") ?? projectDetail.querySelector(".project-detail-shell") ?? projectDetail;
    if (!insertionTarget) return;

    ensureStyle();
    insertionTarget.insertAdjacentElement("afterend", createPanel(projectId, group));
  };

  const scheduleInject = () => {
    window.requestAnimationFrame(() => {
      injectAppIconPanel();
      window.setTimeout(injectAppIconPanel, 120);
    });
  };

  const start = () => {
    scheduleInject();

    window.addEventListener("popstate", scheduleInject);
    window.addEventListener("hashchange", scheduleInject);

    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest("#documents [data-filter], [data-project-image-link], .project-detail-index-card")) {
        window.setTimeout(scheduleInject, 80);
      }
    });

    const observer = new MutationObserver(scheduleInject);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();

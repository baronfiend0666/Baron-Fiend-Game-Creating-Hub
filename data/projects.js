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

  const patrisAppIconSection = {
    id: "app-icons",
    order: "04",
    title: "앱 아이콘 이미지",
    folder: "assets/images/patris/app-icons",
    description: "Patris 앱 아이콘 버전 교체 및 비교용 PNG 이미지입니다.",
    items: [
      {
        title: "App Icon - Isadora",
        ext: "png",
        fileName: "Patris_App_Icon_Isadora.png",
        path: "assets/images/patris/app-icons/patris-app-icon-isadora.png",
        thumbnail: "assets/images/patris/app-icons/patris-app-icon-isadora.png",
      },
      {
        title: "App Icon - Iris",
        ext: "png",
        fileName: "Patris_App_Icon_Iris.png",
        path: "assets/images/patris/app-icons/patris-app-icon-iris.png",
        thumbnail: "assets/images/patris/app-icons/patris-app-icon-iris.png",
      },
    ],
  };

  // Patris 메뉴에서만 앱 아이콘 이미지 섹션이 보이도록 제한합니다.
  if (activeProjectId === "patris") {
    data.portfolioSections = [...data.portfolioSections, patrisAppIconSection];
  }

  return data;
})();

(() => {
  const APP_ICON_PATH_PREFIX = "assets/images/patris/app-icons/";

  const enhancePatrisAppIconCards = () => {
    document.querySelectorAll(`a.file-link[href*="${APP_ICON_PATH_PREFIX}"]`).forEach((link) => {
      const card = link.closest(".file-set-card");
      if (!card || card.dataset.appIconPreviewEnhanced === "true") return;

      const href = link.getAttribute("href") || "";
      const title = card.querySelector(".file-set-card-body strong")?.textContent?.trim() || "Patris App Icon";
      const body = card.querySelector(".file-set-card-body");
      const preview = document.createElement("img");

      preview.src = href;
      preview.alt = `${title} 미리보기`;
      preview.loading = "lazy";
      preview.decoding = "async";
      preview.style.width = "96px";
      preview.style.height = "96px";
      preview.style.flex = "0 0 96px";
      preview.style.objectFit = "cover";
      preview.style.borderRadius = "24px";
      preview.style.boxShadow = "0 14px 32px rgba(0, 0, 0, 0.28)";
      preview.style.border = "1px solid rgba(255, 255, 255, 0.22)";

      if (body) {
        card.insertBefore(preview, body);
      } else {
        card.prepend(preview);
      }

      card.dataset.appIconPreviewEnhanced = "true";
      card.style.alignItems = "center";
      card.style.gap = "16px";
    });
  };

  const startEnhancer = () => {
    enhancePatrisAppIconCards();

    const observer = new MutationObserver(enhancePatrisAppIconCards);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startEnhancer, { once: true });
  } else {
    startEnhancer();
  }
})();

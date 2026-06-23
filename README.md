# Game Project Portfolio Site

순수 HTML, CSS, 바닐라 JavaScript만 사용한 게임기획 포트폴리오 웹사이트입니다.

## 폴더 구조

```text
game_project_portfolio_site/
├─ index.html
├─ data/
│  └─ projects.js
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  ├─ icons/
│  │  └─ favicon.svg
│  ├─ images/
│  │  ├─ search-image.png
│  │  ├─ patris-hero.svg
│  │  ├─ crimson-frequency-hero.svg
│  │  └─ anomaly-record-hero.png 또는 anomaly-record-hero.svg
│  ├─ docs/
│  │  ├─ patris/
│  │  ├─ crimson-frequency/
│  │  └─ anomaly-record/
│  └─ videos/
```

## 수정 위치

- 프로젝트 설명 / PDF 경로 / YouTube 주소: `data/projects.js`
- 페이지 구조: `index.html`
- 디자인 / 반응형 레이아웃: `assets/css/style.css`
- 카드 자동 생성 / 필터 / 모바일 메뉴: `assets/js/main.js`

## PDF 연결 방법

`data/projects.js`에 적힌 경로와 같은 위치에 PDF 파일을 넣으면 됩니다.

예시:

```text
assets/docs/anomaly-record/Anomaly_Record_Level_Design_Document.pdf
```

## YouTube 영상 교체 방법

`data/projects.js`의 `youtube` 값을 아래 형식으로 교체합니다.

```js
"https://www.youtube.com/embed/실제영상ID"
```

## 배포 시 권장 수정

`index.html`의 canonical URL과 og:image 경로는 Vercel 배포 주소 기준 절대 URL로 교체하는 것이 좋습니다.

## 이번 수정 반영 사항

- `assets/images/archfiend-books-games-main.png`
  - 홈페이지 메인 페이지에서 바로 보이는 대표 이미지로 삽입했습니다.
- `assets/icons/favicon.ico`
  - 업로드한 아바타 캐릭터 데포르메 이미지를 기반으로 생성한 Favicon입니다.
- `assets/icons/favicon-avatar.png`
  - PNG 기반 브라우저 아이콘용 파일입니다.
- `assets/icons/apple-touch-icon.png`
  - 모바일 홈 화면 추가용 아이콘입니다.
- `main.html`
  - Vercel 경로가 `/main.html`인 경우에도 바로 열릴 수 있도록 `index.html`과 동일한 페이지로 추가했습니다.
- 외부 링크 배너
  - `https://my-game-portfolio-tau.vercel.app/main.html`로 이동하는 별도 배너 섹션을 추가했습니다.


## 포트폴리오 섹션 구조 최신 반영

홈페이지의 `포트폴리오 업데이트 메모` 섹션은 제거했습니다.

문서/파일 열람 영역은 아래 구조로 재구성했습니다.

```text
01 - 사전 기획 포트폴리오
├─ {Project}_개발 제안서.docx
├─ {Project}_콘텐츠맵.svg
├─ {Project}_게임 소개서.docx
└─ {Project}_GDD.docx

02 - 콘셉트 기획 포트폴리오
├─ {Project}_게임 스토리.docx
├─ {Project}_게임 시나리오.docx
├─ {Project}_스토리 보드.docx
├─ {Project}_캐릭터 컨셉 기획서.docx
├─ {Project}_배경 컨셉 기획서.docx
├─ {Project}_캐릭터 테이블.xlsx
├─ {Project}_아이템 테이블.xlsx
├─ {Project}_퀘스트 테이블.xlsx
├─ {Project}_다이얼로그 테이블.xlsx
└─ {Project}_시나리오 테이블.xlsx

03 - 시스템 기획 포트폴리오
├─ {Project}_게임 메커닉스.docx
├─ {Project}_프로세스 플로우.svg
├─ {Project}_ERD.svg
├─ {Project}_데이터 스키마.docx
└─ {Project}_통합 데이터 테이블.docx
```

사이트 내부 실제 파일 경로는 `data/projects.js`와 `assets/docs/` 하위 폴더 구조를 기준으로 연결됩니다.


## 최신 수정 반영 사항

- 메인 히어로 문구를 `Free Gaming, Free Adventure, Free Growth`로 변경했습니다.
- 메인 설명 문구를 `Vision Up | Game Creator / Web Novel Writer / Vtuber`로 변경했습니다.
- 프로젝트 3종 카드와 게임 플레이 영상 카드는 데스크톱 기준 3열 가로형으로 정렬됩니다.
- 프로젝트별 포트폴리오 파일 열람 영역은 Patris / Crimson Frequency / Anomaly Record 단위로 완전히 분리했습니다.
- Patris 엔진 표기를 `Unreal Engine 5`로 수정했습니다.
- 게임 플레이 영상 섹션 아래에 `원작 웹소설 연재 정보` 섹션을 추가했습니다.
- 원작 웹소설 플랫폼 URL은 `data/projects.js`의 `novelIPs` 항목에서 삽입하면 됩니다.


## 추가 수정 사항

- 사이트 favicon을 새로 첨부된 금색 문양 이미지로 교체했습니다.
- 브라우저 캐시 문제를 피하기 위해 새 파일명(`favicon-gold-emblem.ico`, `favicon-gold-emblem.png`)으로 연결했습니다.
- `원작 웹소설 연재 정보` 섹션을 게임 플레이 영상 아래에 다시 추가했습니다.
- 아래 3개 섹션이 카드 형태로 배치됩니다.
  - 파트리스(Patris) (1부) 원작 웹소설 IP - 『강령명가의 악질분자로 살아남기』
  - 파트리스(Patris) (2부) 원작 웹소설 IP - 『합법적 성물 도둑』
  - 크림슨 프리퀀시(Crimson Frequency) 원작 웹소설 IP - 『미스터 헬 하운드의 스트리밍』


## 메인 화면/프로젝트 카드 최신 수정

- 메인 화면 문구를 아래와 같이 반영했습니다.
  - `Free Gaming, Free Adventure, Free Growth`
  - `Vision Up | Game Creator / Web Novel Writer / Vtuber`
- 프로젝트 3종 메뉴의 각 섹션 배경 이미지를 업로드한 이미지 3종으로 교체했습니다.
  - Patris → `assets/images/patris-project-card.png`
  - Crimson Frequency → `assets/images/crimson-frequency-project-card.png`
  - Anomaly Record → `assets/images/anomaly-record-project-card.png`


## 프로젝트 3종 이미지 재지정

현재 상태를 유지한 채, 프로젝트 3종 메뉴의 각 프로젝트 이미지 연결을 아래와 같이 다시 지정했습니다.

- Patris → 영문 텍스트가 없는 이미지
- Crimson Frequency → Crimson Frequency 로고/텍스트가 있는 이미지
- Anomaly Record → Anomaly Record 로고/텍스트가 있는 이미지

적용 파일:
- assets/images/patris-project-card.png
- assets/images/crimson-frequency-project-card.png
- assets/images/anomaly-record-project-card.png


## 프로젝트 3종 메뉴 이미지 직접 삽입

- `프로젝트 3종` 메뉴에 진입했을 때 각 프로젝트 이미지를 카드 내부에서 바로 볼 수 있도록 수정했습니다.
- 배치 순서:
  - Patris → `assets/images/patris-project-visual.png`
  - Crimson Frequency → `assets/images/crimson-frequency-project-visual.png`
  - Anomaly Record → `assets/images/anomaly-record-project-visual.png`
- 기존처럼 배경처럼 희미하게 보이는 방식이 아니라, 카드 상단 비주얼 영역에 직접 삽입되도록 변경했습니다.


## 메인 화면 문구 수정

기존 상태와 프로젝트 이미지 삽입 상태를 유지한 채, 메인 화면 문구만 아래와 같이 수정했습니다.

- `Free Gaming, Free Adventure, Free Growth`
- `Vision Up | Game Creator / Web Novel Writer / Vtuber`


## 원작 웹소설 연재 정보 메뉴 복구

현재 상태의 파일 요소를 삭제하지 않고, 게임 플레이 영상 메뉴 아래에 `원작 웹소설 연재 정보` 섹션을 다시 추가했습니다.

구성:
- 파트리스(Patris) (1부) 원작 웹소설 IP - 『강령명가의 악질분자로 살아남기』
- 파트리스(Patris) (2부) 원작 웹소설 IP - 『합법적 성물 도둑』
- 크림슨 프리퀀시(Crimson Frequency) 원작 웹소설 IP - 『미스터 헬 하운드의 스트리밍』

각 카드에는 문피아 / 네이버 시리즈 / 카카오페이지 연재 페이지 URL 삽입 칸이 표시됩니다.
URL은 `data/projects.js`의 `novelIPs` 항목에서 입력합니다.


## 사이트 배경 및 사이트명 수정

현재 상태의 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 웹사이트 백그라운드 이미지를 첨부한 이미지로 교체
  - `assets/images/baron-fiend-site-background.png`
- 웹사이트 이름을 `Baron Fiend Game Creative Hub`로 변경
  - 브라우저 탭 제목
  - Open Graph / Twitter 제목
  - 사이트 내부 주요 텍스트 표기


## 단일 백그라운드 및 사이트명 변경

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 웹사이트 백그라운드 이미지를 재첨부한 이미지 1장만 단일 배경으로 사용하도록 변경
  - `assets/images/baron-fiend-single-background.png`
- 웹사이트 이름을 `Baron Fiend Game Creating Hub`로 변경
  - 브라우저 탭 제목
  - Open Graph / Twitter 제목
  - 사이트 내부 주요 이름 표기


## 단일 배경 이미지 표시 방식 재조정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 재첨부한 이미지를 사이트 전체와 최상단(hero) 영역의 단일 백그라운드 이미지로 사용하도록 조정
  - `assets/images/baron-fiend-single-background-v2.png`
- 웹사이트 접속 시 최상단에는 기존 아노말리 레코드 가로형 비주얼이 아닌, 재첨부된 이미지만 보이도록 변경
  - 기존 hero 시각 요소는 삭제하지 않고 CSS로 숨김 처리
- 스크롤 시 타이틀, 섹션, 세부 항목이 배경에 묻히지 않도록
  - 다크 마스크 오버레이
  - 반투명 패널/카드 오버레이
  - 부분 클리핑 마스크 느낌의 가림 효과
  를 추가 적용


## 섹션 텍스트 최신 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 텍스트만 수정했습니다.

- 프로젝트 3종 설명:
  - `게임 기획 실무자 양성 과정(1회차, 2026)을 통해 구축한 세 개의 게임 기획 포트폴리오를 소개합니다.`
- 문서 열람 영역 타이틀:
  - `프로젝트 분류에 따른 개별 파일 모음`
- 기존 포트폴리오 사이트 바로가기 설명:
  - `Notion 사이트에 게재한 기존의 Vercel 기반 포트폴리오 모음 사이트입니다.`


## 히어로 문구 / 프로젝트 키워드 / 영상 URL 최신 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 히어로 문구를 3줄 표시로 변경:
  - Free Gaming,
  - Free Adventure,
  - Free Growth
- Patris 키워드에서 `게임빙의물`, `네크로맨서물` 삭제
- Crimson Frequency 키워드에서 `헌터물`, `탑등반물`, `인터넷 방송물`, `복수극` 삭제 및 `액션 RPG` 추가
- Crimson Frequency 설명 문구 수정
- Anomaly Record 키워드에서 `괴담물`, `격리 픽션`, `도시 괴이`, `현장분석` 삭제 및 `RPG` 추가
- 게임 플레이 영상 섹션의 YouTube URL 값을 비워 두고, URL 삽입 대기 칸이 표시되도록 수정


## 주요 섹션 가독성 및 링크드 포트폴리오 문구 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 푸른 글씨 텍스트 `LINKED PORTFOLIO`를 `LINKED PORTFOLIO SITE`로 변경했습니다.
- 프로젝트 3종 / 프로젝트 분류에 따른 개별 파일 모음 / 게임 플레이 영상 / 원작 웹소설 연재 정보 섹션의 헤더 배너 색상을
  Free Gaming 섹션과 유사한 단일 다크 배너 톤으로 통일했습니다.
- 백그라운드 이미지 위에서도 텍스트가 묻히지 않도록 반투명 다크 패널, 텍스트 섀도우, 카드 배경 보강을 적용했습니다.


## Patris 프로젝트 3종 배너 이미지 교체

현재 상태의 각 파일 요소를 삭제하지 않고 유지한 채,
프로젝트 3종 메뉴에서 Patris 카드에 표시되는 이미지를
텍스트가 포함된 Patris 세로형 배너 이미지로 교체했습니다.

- 교체 대상: `assets/images/patris-project-visual.png`


## 프로젝트 카드 행 정렬 / 키워드 / 영상·연재 정보 텍스트 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 프로젝트 3종 메뉴에서 Patris / Crimson Frequency / Anomaly Record 카드의 이미지 하단 텍스트 행 높이와 배치를 일괄 정렬했습니다.
- 세 프로젝트에 키워드 `3인칭`을 추가했습니다.
- 게임 플레이 영상 메뉴의 프로젝트명을 아래와 같이 변경했습니다.
  - 파트리스(Patris)
  - 크림슨 프리퀀시(Crimson Frequency)
  - 아노말리 레코드(Anomaly Record)
- 원작 웹소설 연재 정보 메뉴의 플랫폼명을 아래와 같이 변경했습니다.
  - 문피아(Munpia)
  - 네이버 시리즈(Naver Series)
  - 카카오페이지(Kakaopage)


## 프로젝트 카드 행·열 통일 및 AI 애니메이션 산출물 섹션명 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 프로젝트 3종 카드의 이미지 하단 배너 내부 텍스트 행·열 구조를 동일하게 고정했습니다.
- 프로젝트 3종 설명 문구를 아래 문장으로 변경했습니다.
  - `게임기획 실무자 양성과정(1회차, 2026)을 통해 구축한 세 개의 게임기획 포트폴리오를 소개합니다.`
- `게임 플레이 영상` 메뉴명을 `스토리보드 기반 제작 AI 애니메이션 산출물`로 변경했습니다.
- 각 프로젝트의 영상 설명 문구를 아래 문장으로 통일했습니다.
  - `스토리보드 기반 제작 AI 애니메이션 산출물의 Youtube 영상 URL입니다.`


## 프로젝트 표시 라인 및 AniFlow 섹션명 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 프로젝트 3종 메뉴의 각 프로젝트 표시 라인을 아래와 같이 조정했습니다.
  - 파트리스 · 3인칭 오픈월드 캐릭터 수집형 액션 RPG
  - 크림슨 프리퀀시 · 3인칭 현대 로그라이트 액션 RPG
  - 아노말리 레코드 · 3인칭 오컬트 어반 판타지 RPG
- `스토리보드 기반 제작 AI 애니메이션 산출물` 메뉴명을 `AniFlow 기반 제작 AI Anime`로 변경했습니다.


## AI Anime with AniFlow 메뉴 및 Crimson Frequency 키워드 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- 프로젝트 3종 메뉴의 `Crimson Frequency` 섹션에 키워드 `현대`를 추가했습니다.
- `AniFlow 기반 제작 AI Anime` 메뉴명을 `AI Anime with AniFlow`로 변경했습니다.
- 세 프로젝트의 영상 설명 문구를 아래 문장으로 변경했습니다.
  - `AniFlow 사이트와 각 프로젝트의 스토리보드 문서를 기반으로 제작한 AI 애니메이션의 1화 영상 유튜브 URL입니다.`


## AI Anime 설명 / Base Web Novel IP 메뉴 및 원작 IP 제목 구조 수정

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 내용을 추가 반영했습니다.

- `AI Anime with AniFlow` 섹션 설명을 아래 문장으로 변경했습니다.
  - `각 프로젝트의 AniFlow 기반 AI Anime 영상 1화를 YouTube 임베드로 연결합니다.`
- 상단 메뉴의 `Web Novel IP`를 `Base Web Novel IP`로 변경했습니다.
- 원작 웹소설 연재 정보 카드 제목 구조를 프로젝트명 줄과 원작 IP 줄로 분리했습니다.
  - 파트리스(Patris) (1부) / 원작 웹소설 IP - 『강령명가의 악질분자로 살아남기』
  - 파트리스(Patris) (2부) / 원작 웹소설 IP - 『합법적 성물 도둑』
  - 크림슨 프리퀀시(Crimson Frequency) / 원작 웹소설 IP - 『미스터 헬 하운드의 스트리밍』








## Project Main Cover Scroll 관련 요소 삭제

요청에 따라 `Project Main Cover Scroll` 관련 요소를 삭제했습니다.

- `portfolio-cover-scroll` 섹션 삭제
- `Portfolio Cover Vertical Scroll Replacement` CSS 블록 삭제
- 전용 이미지 폴더 `assets/images/pure-cover-scroll/` 삭제
- favicon 교체 등 기존 다른 요소는 유지


## My Profile 관련 요소 폐기

요청에 따라 `My Profile` 메뉴 관련 요소를 폐기했습니다.

- 상단 메뉴의 `My Profile` 항목 삭제
- 메인 페이지의 `profile` 섹션 삭제
- `profile.html` 상세 페이지 삭제
- My Profile 전용 이미지 및 관련 링크 아이콘 폴더 삭제
- My Profile 전용 CSS 블록 삭제


## Documents 프로젝트 필터 버튼 가독성 보강

현재 상태의 각 파일 요소를 삭제하지 않고, 아래 요청 사항만 반영했습니다.

- `프로젝트 분류에 따른 개별 파일 모음` 메뉴의 프로젝트 필터 버튼 3종을 흰색 바탕 + 검은 텍스트로 변경했습니다.
  - Patris
  - Crimson Frequency
  - Anomaly Record
- 백그라운드 이미지 위에서도 텍스트가 묻히지 않도록 텍스트 섀도우 제거, 테두리, 그림자, 폰트 굵기를 보강했습니다.


## About Creator 섹션 반영

현재 상태의 각 파일 요소를 삭제하지 않고, 기존 Contact 섹션을 `About Creator` 섹션으로 변경했습니다.

- 상단 메뉴의 `Contact` 항목을 `About Creator`로 변경했습니다.
- 기존 `contact` 섹션을 `about-creator` 섹션으로 변경했습니다.
- 숨김 처리되어 있던 Contact 섹션 표시 제한을 제거했습니다.
- 제작자 정보 항목을 아래 내용으로 반영했습니다.
  - 이름: 박정호(Park Jeong-ho)
  - 필명: 바론핀드(Baron Fiend)
  - 핵심 역량: 게임 스토리, 시나리오, 시스템 기획 및 데이터 테이블 설계
  - 포트폴리오 범위: Patris / Crimson Frequency / Anomaly Record
  - 연락처: jeonghopark2026@gmail.com
  - 한 줄 소개: 공백 처리


## 제작자 정보 섹션 최신 수정 사항

- 기존 `About Creator` 섹션의 제작자 정보 항목에 하얀 버튼형 시각 효과를 적용했습니다.
- 제작자 정보 항목의 열과 행을 균일한 2열 그리드 구조로 정렬했습니다.
- `필명`과 `핵심 역량` 사이에 `연재 및 활동 플랫폼` 항목을 추가했습니다.
- `연재 및 활동 플랫폼` 항목에는 `문피아 / 노벨피아`를 반영했습니다.
- `한 줄 소개` 항목에는 `게임 크리에이터이자 웹소설 작가의 비전을 이루기 위해 노력하고 있습니다.`를 반영했습니다.

### 2026-06-23 - About Creator 제작자 정보 문구 수정

- `플랫폼` 항목명을 `연재 및 활동 플랫폼`으로 변경했습니다.
- `한 줄 소개` 내용을 `게임 크리에이터이자 웹소설 작가의 비전을 이루기 위해 노력하고 있습니다.`로 변경했습니다.


### 2026-06-23 - 제작자 정보 레이아웃 테마 업그레이드

- `제작자 정보` 섹션의 이름 / 필명 / 연재 및 활동 플랫폼 / 핵심 역량 / 포트폴리오 범위 / 연락처 / 한 줄 소개 텍스트 배치 구조는 유지했습니다.
- 기존 2열 행 구조를 유지한 상태에서 사이트의 다크 판타지·블루 퍼플 계열 테마에 맞춰 카드 배경, 테두리, 그림자, 글로우 효과를 조정했습니다.
- 기존의 강한 흰색 버튼형 시각 효과를 사이트 전체 톤과 어울리는 반투명 글래스 카드형 레이아웃으로 업그레이드했습니다.
- 각 행에 호버 시 은은한 강조 효과를 적용해 인터랙션 완성도를 보강했습니다.

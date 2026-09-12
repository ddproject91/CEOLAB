# CLAUDE.md — CEO LAB (세오랩)

## 프로젝트 개요
CEO LAB: 예비창업자를 위한 프랜차이즈·창업 정보 플랫폼.
**목표: 예비창업자(고객)와 프랜차이즈 모집사·부동산업자를 연결하는 창업 리드 플랫폼.**

## 브랜드 아이덴티티
- 로고: "CEO"(잉크/화이트) + "O"자리 상승 막대그래프 아이콘 + "LAB"(골드) + 스파클
- 한글 브랜드명: 세오랩 / 태그라인: "창업을 연구하고, 성공을 설계하다"
- 컬러: 네이비(#16233F) + 골드(#C9A227) 2색 체계. 라이트 모드는 흰 배경+네이비 잉크, 다크 모드는 네이비 배경+화이트 잉크. 골드는 두 모드 모두 공통 액센트.
- 폰트: IBM Plex Sans KR(본문/제목) + IBM Plex Mono(숫자/데이터)
- 톤: 신뢰감 있는 비즈니스/리서치("LAB") 무드. 화려한 스타트업풍 지양.

## 핵심 이용자 구조 (2026-08-26 확정 — 가장 중요한 설계 기준)
플랫폼은 4개 역할로 동작한다. 이 구조가 DB 스키마와 권한 설계의 기준이 된다.

| 역할 | 설명 | 권한 |
|---|---|---|
| **A — 통합 플랫폼 관리자** | 서비스 운영자(본인) | 전체 통솔 권한. B/C 계정을 생성하고 등급(권한)을 부여 |
| **B — 프랜차이즈·가맹점 모집사** | 브랜드 본사/모집 대행사 | A에게 계정을 받아 활동. 자신이 담당하는 브랜드에 고객(D)이 남긴 상담 DB(리드)를 열람·연락 |
| **C — 부동산업자** | 상가/매물 중개인 | A에게 계정을 받아 활동. 무권리 매물 등 매물·상권 정보를 직접 등록 |
| **D — 고객(예비창업자)** | 일반 방문자/회원 | 브랜드별 창업 정보를 열람하고, 관심 브랜드에 상담 요청(리드 남기기) |

**핵심 플로우**: D가 브랜드 상세를 보고 "상담 요청" → 해당 브랜드를 담당하는 B에게 리드로 전달 → B가 고객에게 직접 연락. C는 이 흐름과 별개로 매물 정보를 등록해 D에게 노출.

**Why**: 단순 커뮤니티가 아니라 "브랜드 탐색 → 상담 리드 발생 → 모집사 컨택"이 핵심 수익 구조. 부동산 매물(C)은 독립적인 보조 수익원.
**How to apply**: 이후 기능을 추가할 때 이 4역할 권한 경계를 넘지 않는지 항상 확인할 것. 예: 매물 등록 UI는 C(또는 A)만, 리드 열람은 담당 B(또는 A)만 접근 가능해야 함.

## 기술 스택 (바플과 동일한 구성)
- **Frontend**: Next.js(App Router) + TypeScript + Tailwind CSS v4
- **Backend/DB**: Supabase (Postgres, Auth, Storage, RLS) — Phase 1부터 연결 예정
- **배포**: Vercel
- **다국어**: 우선 한국어 단일 (필요시 확장)

## 개발 원칙
- 모바일 퍼스트
- Phase 0(지금)은 백엔드 없이 목업 데이터 홈페이지 1장으로 시작 (바플과 동일한 순서)
- Phase 1부터 Supabase Auth + 역할(A/B/C/D) 기반 RLS로 DB 레벨 접근 제어 강제
- 서버 컴포넌트 우선, 클라이언트 컴포넌트는 인터랙션 필요할 때만

---

## 개발 로드맵

### Phase 0 — 마케팅 목업 홈페이지 (현재)
- 브랜드 아이덴티티 적용한 단일 홈페이지 (히어로, 창업분야 카테고리, 지역별 상권 정보, 무권리 매물 하이라이트, 커뮤니티 피드 — 전부 목업 데이터)
- 백엔드 없음, 회원가입/로그인 없음
- Vercel 배포 완료가 종료 조건

### Phase 1 — 회원 + 역할 구조 (실서비스 MVP)
- Supabase Auth (이메일 기본)
- `profiles.role` = user(D) | recruiter(B) | broker(C) | admin(A)
- A 전용 관리자 페이지: B/C 계정 생성·권한 부여
- 브랜드 상세 페이지 + "상담 요청" 폼 (D → 리드 생성)
- B 전용 대시보드: 담당 브랜드의 리드 목록 열람/연락 상태 관리

### Phase 2 — 매물(C) + 상권 정보 실데이터
- C 전용 매물 등록 UI (무권리 매물, 상가 정보)
- 지역별 상권 통계 실데이터 연동
- D가 매물 상세를 보고 C에게 직접 문의

### Phase 3 — 확장
- 리드 정산/과금 (B가 리드당 비용 지불하는 구조 검토)
- 브랜드사(B) 자체 페이지/콘텐츠 관리
- 커뮤니티(질문/정보공유/후기) 정식 오픈

---

## DB 스키마 초안 (Phase 1)
```
profiles          — id(auth FK), nickname, role(user|recruiter|broker|admin), phone, created_at
brands            — id, name, category, description, franchise_fee_krw, logo_url, owner_recruiter_id(B)
leads             — id, brand_id, customer_id(D), name, phone, message, status(new|contacted|closed), created_at
recruiter_brands  — recruiter_id(B), brand_id  (한 B가 여러 브랜드 담당 가능)
listings          — id, broker_id(C), region, category, deposit_krw, rent_krw, has_premium(bool), address, description
regions           — id, name, avg_premium_krw, avg_rent_krw (상권 통계, 추후 실데이터)
```

## RLS 정책 방향
- brands: 전체 읽기, A만 쓰기(또는 담당 B가 자기 브랜드만 수정)
- leads: 생성은 로그인한 D 누구나, 읽기는 담당 B + A만
- listings: 생성/수정은 본인 C + A만, 읽기는 전체 공개
- profiles.role 변경: A만 가능

## 하지 말 것
- B가 자신이 담당하지 않는 브랜드의 리드를 볼 수 있게 만들지 말 것
- C가 타인이 등록한 매물을 수정할 수 있게 만들지 말 것
- Phase 1부터 RLS 없는 테이블 생성 금지
- service_role 키 클라이언트 사용 금지

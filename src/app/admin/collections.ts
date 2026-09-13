import type { ContentKey } from "@/lib/content";

export interface CollectionMeta {
  key: ContentKey;
  label: string;
  group: string;
  /** 실제로 노출되는 공개 페이지 경로 — 어드민에서 "사이트에서 보기" 링크로 사용 */
  viewUrl?: string;
}

export const COLLECTIONS: CollectionMeta[] = [
  { key: "home.stats", label: "상단 통계", group: "홈", viewUrl: "/" },
  { key: "home.categories", label: "창업분야 카테고리", group: "창업 분야", viewUrl: "/categories" },
  { key: "home.regions", label: "지역별 상권 정보", group: "부동산 정보", viewUrl: "/realestate#regions" },
  { key: "home.listings", label: "무권리 매물", group: "부동산 정보", viewUrl: "/realestate#listings" },
  { key: "home.feed", label: "커뮤니티 게시글", group: "커뮤니티", viewUrl: "/community" },
  { key: "franchise.brands", label: "프랜차이즈 브랜드", group: "프랜차이즈", viewUrl: "/franchise" },
];

export function findCollection(key: string): CollectionMeta | undefined {
  return COLLECTIONS.find((c) => c.key === key);
}

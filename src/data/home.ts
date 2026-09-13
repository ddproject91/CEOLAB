import { getContent } from "@/lib/content";

export interface StatTile {
  label: string;
  value: string;
  unit: string;
  deltaLabel: string;
  deltaType: "up" | "down" | "neutral";
}

export interface HomeStats {
  members: StatTile;
  listings: StatTile;
  posts: StatTile;
  freeListings: StatTile;
}

export const homeStatsFallback: HomeStats = {
  members: { label: "활동 회원", value: "12,480", unit: "명", deltaLabel: "이번달 +320", deltaType: "up" },
  listings: { label: "등록 매물", value: "1,062", unit: "건", deltaLabel: "이번달 +58", deltaType: "up" },
  posts: { label: "이번달 게시글", value: "894", unit: "개", deltaLabel: "전월비 +121", deltaType: "up" },
  freeListings: { label: "무권리 매물", value: "214", unit: "건", deltaLabel: "전체의 20%", deltaType: "neutral" },
};

export async function getHomeStats(): Promise<HomeStats> {
  return getContent("home.stats", homeStatsFallback);
}

/** icon: cafe | food | store | beauty | edu | meal | etc (PageIcons에서 실제 SVG로 매칭) */
export interface CategoryItem {
  icon: "cafe" | "food" | "store" | "beauty" | "edu" | "meal" | "etc";
  name: string;
  count: number;
}

export const homeCategoriesFallback: CategoryItem[] = [
  { icon: "cafe", name: "카페 · 디저트", count: 128 },
  { icon: "food", name: "음식점 · 주점", count: 214 },
  { icon: "store", name: "편의점 · 무인매장", count: 76 },
  { icon: "beauty", name: "뷰티 · 헤어", count: 54 },
  { icon: "edu", name: "교육 · 스터디카페", count: 39 },
  { icon: "meal", name: "밀키트 · 반찬", count: 22 },
  { icon: "etc", name: "기타 서비스", count: 61 },
];

export async function getHomeCategories(): Promise<CategoryItem[]> {
  return getContent("home.categories", homeCategoriesFallback);
}

export interface RegionRow {
  name: string;
  count: number;
  premiumManwon: number;
  rentManwon: number;
  trendPercent: number;
  trendDirection: "up" | "down";
}

export const homeRegionsFallback: RegionRow[] = [
  { name: "서울 · 홍대입구", count: 57, premiumManwon: 4200, rentManwon: 260, trendPercent: 8, trendDirection: "up" },
  { name: "서울 · 성수동", count: 42, premiumManwon: 3800, rentManwon: 210, trendPercent: 12, trendDirection: "up" },
  { name: "서울 · 강남역", count: 38, premiumManwon: 6500, rentManwon: 340, trendPercent: 4, trendDirection: "down" },
  { name: "부산 · 서면", count: 33, premiumManwon: 2100, rentManwon: 150, trendPercent: 15, trendDirection: "up" },
  { name: "인천 · 부평", count: 29, premiumManwon: 1500, rentManwon: 110, trendPercent: 9, trendDirection: "up" },
  { name: "수원 · 인계동", count: 24, premiumManwon: 1950, rentManwon: 140, trendPercent: 11, trendDirection: "up" },
  { name: "대구 · 동성로", count: 21, premiumManwon: 1800, rentManwon: 120, trendPercent: 6, trendDirection: "up" },
  { name: "대전 · 둔산동", count: 18, premiumManwon: 1650, rentManwon: 130, trendPercent: 2, trendDirection: "down" },
];

export async function getHomeRegions(): Promise<RegionRow[]> {
  return getContent("home.regions", homeRegionsFallback);
}

export interface ListingItem {
  id: string;
  title: string;
  region: string;
  category: string;
  floor: string;
  depositManwon: number;
  rentManwon: number;
  postedAgo: string;
}

export const homeListingsFallback: ListingItem[] = [
  { id: "CL-2506-041", title: "성수동 카페거리, 1층 15평", region: "성수동", category: "카페 · 디저트", floor: "1층", depositManwon: 2000, rentManwon: 180, postedAgo: "3일 전" },
  { id: "CL-2506-039", title: "강남역 5분, 22평 음식점 자리", region: "강남역", category: "음식점 · 주점", floor: "지하1층", depositManwon: 3000, rentManwon: 250, postedAgo: "5일 전" },
  { id: "CL-2506-033", title: "부평역 인근, 12평 코너 매장", region: "부평", category: "편의점 · 무인매장", floor: "코너", depositManwon: 1200, rentManwon: 95, postedAgo: "1주 전" },
  { id: "CL-2506-030", title: "서면 메인거리, 18평 샵인샵 가능", region: "서면", category: "뷰티 · 헤어", floor: "2층", depositManwon: 1500, rentManwon: 110, postedAgo: "1주 전" },
  { id: "CL-2506-027", title: "홍대입구 이면도로, 25평 스터디카페 인수", region: "홍대입구", category: "교육 · 스터디카페", floor: "2층", depositManwon: 2500, rentManwon: 200, postedAgo: "2주 전" },
  { id: "CL-2506-021", title: "둔산동 주택가, 10평 반찬가게 자리", region: "둔산동", category: "밀키트 · 반찬", floor: "1층", depositManwon: 900, rentManwon: 70, postedAgo: "3주 전" },
];

export async function getHomeListings(): Promise<ListingItem[]> {
  return getContent("home.listings", homeListingsFallback);
}

export interface FeedItem {
  tag: "q" | "info" | "review" | "study";
  title: string;
  author: string;
  timeAgo: string;
  comments: number;
  likes: number;
}

export const homeFeedFallback: FeedItem[] = [
  { tag: "q", title: "배달앱 수수료 감당 안 되는데 다들 어떻게 버티세요?", author: "카페사장1년차", timeAgo: "2시간 전", comments: 34, likes: 58 },
  { tag: "info", title: "권리금 없는 자리 찾는 법 정리해봤어요 (계약서 체크리스트 포함)", author: "권리금헌터", timeAgo: "5시간 전", comments: 61, likes: 142 },
  { tag: "review", title: "무인 아이스크림 매장 6개월 운영 후기, 매출 공개합니다", author: "야간사장", timeAgo: "1일 전", comments: 47, likes: 203 },
  { tag: "study", title: "성수동 카페 상권분석 같이 하실 분 구해요 (주말 오프라인)", author: "동네빵집예정", timeAgo: "1일 전", comments: 12, likes: 19 },
  { tag: "q", title: "임대차계약 특약사항에 꼭 넣어야 하는 문구 있을까요?", author: "첫창업러", timeAgo: "2일 전", comments: 28, likes: 44 },
  { tag: "info", title: "2025년 소상공인 정책자금 신청 후기 + 서류 리스트 공유", author: "정책자금덕후", timeAgo: "3일 전", comments: 55, likes: 176 },
];

export async function getHomeFeed(): Promise<FeedItem[]> {
  return getContent("home.feed", homeFeedFallback);
}

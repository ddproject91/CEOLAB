import { getContent } from "@/lib/content";

export interface FranchiseBrand {
  name: string;
  category: string;
  feeManwon: number;
  region: string;
  description: string;
}

// 아직 등록된 프랜차이즈가 없어 빈 배열로 시작 — 관리자에서 추가하면 바로 노출됨.
export const franchiseBrandsFallback: FranchiseBrand[] = [];

export async function getFranchiseBrands(): Promise<FranchiseBrand[]> {
  return getContent("franchise.brands", franchiseBrandsFallback);
}

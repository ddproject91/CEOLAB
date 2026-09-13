import type { ContentKey } from "@/lib/content";
import {
  homeStatsFallback,
  homeCategoriesFallback,
  homeRegionsFallback,
  homeListingsFallback,
  homeFeedFallback,
} from "@/data/home";
import { franchiseBrandsFallback } from "@/data/franchise";

export const FALLBACKS: Record<ContentKey, unknown> = {
  "home.stats": homeStatsFallback,
  "home.categories": homeCategoriesFallback,
  "home.regions": homeRegionsFallback,
  "home.listings": homeListingsFallback,
  "home.feed": homeFeedFallback,
  "franchise.brands": franchiseBrandsFallback,
};

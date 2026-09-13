import type { CategoryItem } from "@/data/home";

const PATHS: Record<CategoryItem["icon"], React.ReactNode> = {
  cafe: (
    <>
      <path d="M4 9h13a3 3 0 0 1 0 6h-1" />
      <path d="M4 9v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9" />
      <path d="M8 5.5c0 1-1 1-1 2M12 5.5c0 1-1 1-1 2" />
    </>
  ),
  food: (
    <>
      <path d="M6 3v7a3 3 0 0 0 6 0V3M9 3v7M6 3v0M17 3c-2 2-2 5-2 5v13" />
    </>
  ),
  store: (
    <>
      <path d="M4 4h16l-1.5 6h-13z" />
      <path d="M5.5 10 6 20h12l.5-10" />
      <path d="M10 14h4" />
    </>
  ),
  beauty: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="m20 5-12 14M8 8l12 11" />
    </>
  ),
  edu: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 5.5v15A2.5 2.5 0 0 0 6.5 23" />
    </>
  ),
  meal: (
    <>
      <path d="M3.5 8 12 4l8.5 4-8.5 4z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  etc: (
    <>
      <rect x="3.5" y="8" width="17" height="12" rx="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
};

export function CategoryIcon({ icon }: { icon: CategoryItem["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[icon]}
    </svg>
  );
}

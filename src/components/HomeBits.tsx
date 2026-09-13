export const FEED_TAG_LABEL: Record<string, string> = {
  q: "질문",
  info: "정보공유",
  review: "후기",
  study: "스터디모집",
};

export function TrendIcon({ direction }: { direction: "up" | "down" }) {
  return direction === "up" ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="m6 7 11 11M17 7v11H6" /></svg>
  );
}

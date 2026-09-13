import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getFranchiseBrand } from "@/data/franchise";

export default async function FranchiseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const brand = await getFranchiseBrand(id);
  if (!brand) notFound();

  return (
    <main>
      <section className="block" style={{ paddingTop: 32 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Link href="/franchise" className="see-all" style={{ marginBottom: 20, display: "inline-flex" }}>
            ← 프랜차이즈 목록
          </Link>

          <div className="franchise-detail-hero">
            {brand.imageUrl ? (
              <Image src={brand.imageUrl} alt={brand.name} fill sizes="860px" style={{ objectFit: "cover" }} />
            ) : (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--ink-muted)",
                }}
              >
                {brand.name.slice(0, 1)}
              </span>
            )}
          </div>

          {brand.galleryImages && brand.galleryImages.length > 0 && (
            <div className="franchise-gallery">
              {brand.galleryImages.map((url, i) => (
                <div className="thumb" key={url + i}>
                  <Image src={url} alt="" fill sizes="120px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}

          <div className="block-head" style={{ marginTop: 28, marginBottom: 12 }}>
            <div>
              <div className="tag-row" style={{ marginBottom: 10 }}>
                <span className="tag">{brand.category}</span>
                <span className="tag">{brand.region}</span>
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: "var(--ink)" }}>{brand.name}</h1>
            </div>
            <Link href={`/consult?type=franchise&brand=${encodeURIComponent(brand.name)}`} className="btn btn-accent">
              이 브랜드 상담 신청
            </Link>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 6,
              marginBottom: 24,
              fontSize: 13,
              color: "var(--ink-muted)",
            }}
          >
            예상 가맹비 <span className="tnum" style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--ink)" }}>{brand.feeManwon.toLocaleString()}만원~</span>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-secondary)", marginBottom: 24 }}>
            {brand.description}
          </p>

          {brand.detail && (
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 24,
                fontSize: 14,
                lineHeight: 1.8,
                color: "var(--ink)",
                whiteSpace: "pre-line",
              }}
            >
              {brand.detail}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

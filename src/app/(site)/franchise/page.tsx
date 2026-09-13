import Link from "next/link";
import Image from "next/image";
import { getFranchiseBrands } from "@/data/franchise";

export default async function FranchisePage() {
  const brands = await getFranchiseBrands();

  return (
    <main>
      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Franchise</p>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: "var(--ink)" }}>
                프랜차이즈
              </h1>
              <p>업종별 프랜차이즈 브랜드 정보를 확인하고, 관심 있는 브랜드에 상담을 신청하세요.</p>
            </div>
            <Link href="/consult?type=franchise" className="btn btn-accent">프랜차이즈 상담 신청</Link>
          </div>

          {brands.length === 0 ? (
            <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>
              아직 등록된 프랜차이즈 브랜드가 없어요. 브랜드 정보는 관리자 페이지에서 추가할 수 있어요.
            </p>
          ) : (
            <div className="franchise-grid">
              {brands.map((b) => (
                <Link className="franchise-card" href={`/franchise/${b.id}`} key={b.id}>
                  <div className="thumb">
                    {b.imageUrl ? (
                      <Image src={b.imageUrl} alt={b.name} fill sizes="(min-width: 900px) 33vw, 50vw" style={{ objectFit: "cover" }} />
                    ) : (
                      <span className="placeholder">{b.name.slice(0, 1)}</span>
                    )}
                  </div>
                  <div className="body">
                    <div className="tag-row">
                      <span className="tag">{b.category}</span>
                      <span className="tag">{b.region}</span>
                    </div>
                    <h3 className="name">{b.name}</h3>
                    <p className="desc">{b.description}</p>
                    <div className="meta">
                      <span>가맹비</span>
                      <span className="fee tnum">{b.feeManwon.toLocaleString()}만원~</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

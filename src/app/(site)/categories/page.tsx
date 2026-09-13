import Link from "next/link";
import { getHomeCategories } from "@/data/home";
import { CategoryIcon } from "@/components/CategoryIcon";

export default async function CategoriesPage() {
  const categories = await getHomeCategories();

  return (
    <main>
      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Business Fields</p>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: "var(--ink)" }}>
                창업 분야
              </h1>
              <p>업종별로 쌓인 매물과 게시글을 한 번에 모아봤어요.</p>
            </div>
            <Link href="/consult" className="btn btn-accent">상담 신청</Link>
          </div>

          {categories.length === 0 ? (
            <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>아직 등록된 분야가 없어요.</p>
          ) : (
            <div className="cat-grid">
              {categories.map((c) => (
                <a className="cat-card" href="#" key={c.name}>
                  <CategoryIcon icon={c.icon} />
                  <div className="name">{c.name}</div>
                  <div className="count tnum">{c.count}건</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

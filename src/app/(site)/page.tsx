import Link from "next/link";
import {
  getHomeStats,
  getHomeCategories,
  getHomeRegions,
  getHomeListings,
  getHomeFeed,
} from "@/data/home";
import { CategoryIcon } from "@/components/CategoryIcon";
import { FEED_TAG_LABEL, TrendIcon } from "@/components/HomeBits";

export default async function Home() {
  const [stats, categories, regions, listings, feed] = await Promise.all([
    getHomeStats(),
    getHomeCategories(),
    getHomeRegions(),
    getHomeListings(),
    getHomeFeed(),
  ]);

  const previewCategories = categories.slice(0, 7);
  const previewRegions = regions.slice(0, 4);
  const previewListings = listings.slice(0, 3);
  const previewFeed = feed.slice(0, 3);
  const maxRegionCount = Math.max(...previewRegions.map((r) => r.count), 1);

  return (
    <main id="top">
      <section className="hero wrap">
        <span className="eyebrow"><span className="dot"></span>예비창업자 · 자영업자 커뮤니티</span>
        <h1>혼자 준비하는 창업, <em>정보</em>는 같이 모아요.</h1>
        <p className="lede">상권 시세부터 무권리 매물, 계약서 특약까지 — 먼저 겪은 사장님들의 데이터와 경험이 쌓이는 곳. CEO LAB에서 다음 창업을 검증하세요.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/consult">상담 신청하기</Link>
          <Link className="btn btn-ghost" href="/realestate#listings">무권리 매물 보기</Link>
        </div>

        <div className="stat-row">
          {Object.values(stats).map((s) => (
            <div className="stat-tile" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value tnum">
                {s.value}
                <span style={{ fontSize: "14px", fontWeight: "400", color: "var(--ink-muted)" }}> {s.unit}</span>
              </div>
              {s.deltaType === "neutral" ? (
                <div className="stat-delta" style={{ color: "var(--ink-muted)" }}>{s.deltaLabel}</div>
              ) : (
                <div className={`stat-delta ${s.deltaType}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8" /></svg>
                  {s.deltaLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Field / 01</p>
              <h2>창업분야로 둘러보기</h2>
              <p>업종별로 쌓인 매물과 게시글을 한 번에 모아봤어요.</p>
            </div>
            <Link className="see-all" href="/categories">전체 보기 →</Link>
          </div>
          <div className="cat-grid">
            {previewCategories.map((c) => (
              <Link className="cat-card" href="/categories" key={c.name}>
                <CategoryIcon icon={c.icon} />
                <div className="name">{c.name}</div>
                <div className="count tnum">{c.count}건</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Field / 02</p>
              <h2>부동산 정보</h2>
              <p>부동산업자가 등록한 무권리 매물과 지역별 상권 데이터를 확인하세요.</p>
            </div>
            <Link className="see-all" href="/realestate">전체 보기 →</Link>
          </div>

          <div className="table-scroll">
            <table className="region-table">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}>지역</th>
                  <th className="num">등록 매물</th>
                  <th className="num">평균 권리금</th>
                  <th className="num">평균 월세</th>
                  <th className="num">전월 대비</th>
                </tr>
              </thead>
              <tbody>
                {previewRegions.map((r) => (
                  <tr key={r.name}>
                    <td className="name">{r.name}</td>
                    <td className="num">
                      <div className="bar-cell">
                        <span className="tnum">{r.count}건</span>
                        <span className="bar-track">
                          <span className="bar-fill" style={{ width: `${Math.round((r.count / maxRegionCount) * 100)}%` }}></span>
                        </span>
                      </div>
                    </td>
                    <td className="num tnum">{r.premiumManwon.toLocaleString()}만</td>
                    <td className="num tnum">{r.rentManwon.toLocaleString()}만</td>
                    <td className="num">
                      <span className={`trend ${r.trendDirection}`}>
                        <TrendIcon direction={r.trendDirection} />
                        {r.trendPercent}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="listing-grid" style={{ marginTop: 20 }}>
            {previewListings.map((l) => (
              <div className="listing-card" key={l.id}>
                <div className="listing-top">
                  <span className="listing-id tnum">{l.id}</span>
                  <span className="badge-free">무권리</span>
                </div>
                <h3 className="listing-title">{l.title}</h3>
                <div className="tag-row">
                  <span className="tag">{l.region}</span>
                  <span className="tag">{l.category}</span>
                  <span className="tag">{l.floor}</span>
                </div>
                <div className="listing-meta">
                  <span className="listing-price tnum">
                    {l.depositManwon.toLocaleString()} / {l.rentManwon.toLocaleString()}
                    <span className="unit"> 만원</span>
                  </span>
                  <span className="listing-date">{l.postedAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Field / 03</p>
              <h2>커뮤니티 최신 게시글</h2>
              <p>먼저 창업한 사장님들의 질문, 정보, 후기가 매일 올라와요.</p>
            </div>
            <Link className="see-all" href="/community">전체 보기 →</Link>
          </div>

          <div className="feed">
            {previewFeed.map((f, i) => (
              <Link className="feed-item" href="/community" key={i}>
                <span className={`feed-tag ${f.tag}`}>{FEED_TAG_LABEL[f.tag]}</span>
                <div className="feed-body">
                  <p className="feed-title">{f.title}</p>
                  <p className="feed-sub"><span className="author">{f.author}</span> · {f.timeAgo}</p>
                </div>
                <div className="feed-stats">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z" /></svg>{f.comments}</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z" /></svg>{f.likes}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

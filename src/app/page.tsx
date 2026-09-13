import {
  getHomeStats,
  getHomeCategories,
  getHomeRegions,
  getHomeListings,
  getHomeFeed,
} from "@/data/home";
import { CategoryIcon } from "@/components/CategoryIcon";
import { AuthHeaderActions } from "@/components/auth/AuthHeaderActions";

const FEED_TAG_LABEL: Record<string, string> = {
  q: "질문",
  info: "정보공유",
  review: "후기",
  study: "스터디모집",
};

function TrendIcon({ direction }: { direction: "up" | "down" }) {
  return direction === "up" ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="m6 7 11 11M17 7v11H6" /></svg>
  );
}

export default async function Home() {
  const [stats, categories, regions, listings, feed] = await Promise.all([
    getHomeStats(),
    getHomeCategories(),
    getHomeRegions(),
    getHomeListings(),
    getHomeFeed(),
  ]);

  const maxRegionCount = Math.max(...regions.map((r) => r.count), 1);

  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-row">
          <a className="brandmark" href="#top">
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11.5" cy="12.5" r="8.4" />
                <rect x="7.6" y="12.2" width="1.9" height="4.3" rx="0.6" fill="currentColor" stroke="none" />
                <rect x="10.6" y="9.6" width="1.9" height="6.9" rx="0.6" fill="currentColor" stroke="none" />
                <rect x="13.6" y="7.1" width="1.9" height="9.4" rx="0.6" fill="currentColor" stroke="none" />
                <path d="m19.4 4.3.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="word"><span className="w-ceo">CEO</span><span className="w-lab">LAB</span></span>
          </a>
          <nav className="primary">
            <a href="#feed">커뮤니티</a>
            <a href="#regions">상권 정보</a>
            <a href="#listings">무권리 매물</a>
            <a href="#categories">창업분야</a>
          </nav>
          <AuthHeaderActions />
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <span className="eyebrow"><span className="dot"></span>예비창업자 · 자영업자 커뮤니티</span>
          <h1>혼자 준비하는 창업, <em>정보</em>는 같이 모아요.</h1>
          <p className="lede">상권 시세부터 무권리 매물, 계약서 특약까지 — 먼저 겪은 사장님들의 데이터와 경험이 쌓이는 곳. CEO LAB에서 다음 창업을 검증하세요.</p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#join">무료로 시작하기</a>
            <a className="btn btn-ghost" href="#listings">무권리 매물 보기</a>
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

        <section className="block" id="categories">
          <div className="wrap">
            <div className="block-head">
              <div>
                <p className="kicker">Field / 01</p>
                <h2>창업분야로 둘러보기</h2>
                <p>업종별로 쌓인 매물과 게시글을 한 번에 모아봤어요.</p>
              </div>
            </div>
            <div className="cat-grid">
              {categories.map((c) => (
                <a className="cat-card" href="#" key={c.name}>
                  <CategoryIcon icon={c.icon} />
                  <div className="name">{c.name}</div>
                  <div className="count tnum">{c.count}건</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="regions">
          <div className="wrap">
            <div className="block-head">
              <div>
                <p className="kicker">Field / 02</p>
                <h2>지역별 상권 정보</h2>
                <p>등록된 매물 기준 평균 권리금·임대료와 전월 대비 매물 증감이에요.</p>
              </div>
              <a className="see-all" href="#">전체 지역 보기 →</a>
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
                  {regions.map((r) => (
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
          </div>
        </section>

        <section className="block" id="listings">
          <div className="wrap">
            <div className="block-head">
              <div>
                <p className="kicker">Field / 03</p>
                <h2>무권리 매물 하이라이트</h2>
                <p>권리금 없이 계약 가능한 매물만 모았어요. 등록 순으로 정렬됩니다.</p>
              </div>
              <a className="see-all" href="#">전체 {stats.freeListings.value}{stats.freeListings.unit} 보기 →</a>
            </div>

            <div className="listing-grid">
              {listings.map((l) => (
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

        <section className="block" id="feed">
          <div className="wrap">
            <div className="block-head">
              <div>
                <p className="kicker">Field / 04</p>
                <h2>커뮤니티 최신 게시글</h2>
                <p>먼저 창업한 사장님들의 질문, 정보, 후기가 매일 올라와요.</p>
              </div>
              <a className="see-all" href="#">커뮤니티 전체 보기 →</a>
            </div>

            <div className="feed">
              {feed.map((f, i) => (
                <a className="feed-item" href="#" key={i}>
                  <span className={`feed-tag ${f.tag}`}>{FEED_TAG_LABEL[f.tag]}</span>
                  <div className="feed-body">
                    <p className="feed-title">{f.title}</p>
                    <p className="feed-sub"><span className="author">{f.author}</span> · {f.timeAgo}</p>
                  </div>
                  <div className="feed-stats">
                    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z" /></svg>{f.comments}</span>
                    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z" /></svg>{f.likes}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="join">
        <div className="wrap">
          <div className="footer-row">
            <div>
              <a className="brandmark" href="#top">
                <span className="badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="11.5" cy="12.5" r="8.4" />
                    <rect x="7.6" y="12.2" width="1.9" height="4.3" rx="0.6" fill="currentColor" stroke="none" />
                    <rect x="10.6" y="9.6" width="1.9" height="6.9" rx="0.6" fill="currentColor" stroke="none" />
                    <rect x="13.6" y="7.1" width="1.9" height="9.4" rx="0.6" fill="currentColor" stroke="none" />
                    <path d="m19.4 4.3.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="word"><span className="w-ceo">CEO</span><span className="w-lab">LAB</span></span>
              </a>
              <p className="tagline">세오랩 — 창업을 연구하고, 성공을 설계하다</p>
              <p>먼저 창업한 사람들의 데이터와 경험이 쌓이는 예비창업자 커뮤니티. 상권, 매물, 정책까지 한 곳에서 검증하세요.</p>
            </div>
            <div className="footer-links">
              <div>
                <strong>둘러보기</strong>
                <a href="#categories">창업분야</a>
                <a href="#regions">상권 정보</a>
                <a href="#listings">무권리 매물</a>
                <a href="#feed">커뮤니티</a>
              </div>
              <div>
                <strong>회사</strong>
                <a href="#">소개</a>
                <a href="#">제휴 문의</a>
                <a href="#">공지사항</a>
              </div>
            </div>
          </div>
          <div className="footer-note">이 페이지는 서비스 구조를 보여주기 위한 데모 화면이며, 표시된 매물·게시글·통계는 예시 데이터입니다.</div>
        </div>
      </footer>
    </>
  );
}

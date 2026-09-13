import Link from "next/link";
import { getHomeListings, getHomeRegions } from "@/data/home";
import { TrendIcon } from "@/components/HomeBits";

export default async function RealestatePage() {
  const [listings, regions] = await Promise.all([getHomeListings(), getHomeRegions()]);
  const maxRegionCount = Math.max(...regions.map((r) => r.count), 1);

  return (
    <main>
      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Real Estate</p>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: "var(--ink)" }}>
                부동산 정보
              </h1>
              <p>부동산업자가 등록한 무권리 매물과 지역별 상권 데이터를 한눈에 확인하세요.</p>
            </div>
            <Link href="/consult?type=realestate" className="btn btn-accent">부동산 상담 신청</Link>
          </div>
        </div>
      </section>

      <section className="block" id="listings">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">2-1</p>
              <h2>무권리 매물 정보</h2>
              <p>권리금 없이 계약 가능한 매물만 모았어요. 등록 순으로 정렬됩니다.</p>
            </div>
          </div>

          {listings.length === 0 ? (
            <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>아직 등록된 매물이 없어요.</p>
          ) : (
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
          )}
        </div>
      </section>

      <section className="block" id="regions">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">2-2</p>
              <h2>지역별 상권 정보</h2>
              <p>등록된 매물 기준 평균 권리금·임대료와 전월 대비 매물 증감이에요.</p>
            </div>
          </div>

          {regions.length === 0 ? (
            <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>아직 상권 데이터가 없어요.</p>
          ) : (
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
          )}
        </div>
      </section>
    </main>
  );
}

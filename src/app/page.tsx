export default function Home() {
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
    <div className="masthead-actions">
      <a className="btn btn-ghost" href="#feed">둘러보기</a>
      <a className="btn btn-accent" href="#join">가입하기</a>
    </div>
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
      <div className="stat-tile">
        <div className="stat-label">활동 회원</div>
        <div className="stat-value tnum">12,480<span style={{fontSize: "14px", fontWeight: "400", color: "var(--ink-muted)"}}> 명</span></div>
        <div className="stat-delta up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>
          이번달 +320
        </div>
      </div>
      <div className="stat-tile">
        <div className="stat-label">등록 매물</div>
        <div className="stat-value tnum">1,062<span style={{fontSize: "14px", fontWeight: "400", color: "var(--ink-muted)"}}> 건</span></div>
        <div className="stat-delta up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>
          이번달 +58
        </div>
      </div>
      <div className="stat-tile">
        <div className="stat-label">이번달 게시글</div>
        <div className="stat-value tnum">894<span style={{fontSize: "14px", fontWeight: "400", color: "var(--ink-muted)"}}> 개</span></div>
        <div className="stat-delta up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>
          전월비 +121
        </div>
      </div>
      <div className="stat-tile">
        <div className="stat-label">무권리 매물</div>
        <div className="stat-value tnum">214<span style={{fontSize: "14px", fontWeight: "400", color: "var(--ink-muted)"}}> 건</span></div>
        <div className="stat-delta" style={{color: "var(--ink-muted)"}}>전체의 20%</div>
      </div>
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
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h13a3 3 0 0 1 0 6h-1"/><path d="M4 9v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9"/><path d="M8 5.5c0 1-1 1-1 2M12 5.5c0 1-1 1-1 2"/></svg>
          <div className="name">카페 · 디저트</div>
          <div className="count tnum">128건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a3 3 0 0 0 6 0V3M9 3v7M6 3v0M17 3c-2 2-2 5-2 5v13"/></svg>
          <div className="name">음식점 · 주점</div>
          <div className="count tnum">214건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16l-1.5 6h-13z"/><path d="M5.5 10 6 20h12l.5-10"/><path d="M10 14h4"/></svg>
          <div className="name">편의점 · 무인매장</div>
          <div className="count tnum">76건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="m20 5-12 14M8 8l12 11"/></svg>
          <div className="name">뷰티 · 헤어</div>
          <div className="count tnum">54건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15A2.5 2.5 0 0 0 6.5 23"/></svg>
          <div className="name">교육 · 스터디카페</div>
          <div className="count tnum">39건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8 12 4l8.5 4-8.5 4z"/><path d="M3.5 8v8L12 20l8.5-4V8"/><path d="M12 12v8"/></svg>
          <div className="name">밀키트 · 반찬</div>
          <div className="count tnum">22건</div>
        </a>
        <a className="cat-card" href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="1.5"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          <div className="name">기타 서비스</div>
          <div className="count tnum">61건</div>
        </a>
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
              <th style={{width: "34%"}}>지역</th>
              <th className="num">등록 매물</th>
              <th className="num">평균 권리금</th>
              <th className="num">평균 월세</th>
              <th className="num">전월 대비</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">서울 · 홍대입구</td>
              <td className="num"><div className="bar-cell"><span className="tnum">57건</span><span className="bar-track"><span className="bar-fill" style={{width: "100%"}}></span></span></div></td>
              <td className="num tnum">4,200만</td>
              <td className="num tnum">260만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>8%</span></td>
            </tr>
            <tr>
              <td className="name">서울 · 성수동</td>
              <td className="num"><div className="bar-cell"><span className="tnum">42건</span><span className="bar-track"><span className="bar-fill" style={{width: "74%"}}></span></span></div></td>
              <td className="num tnum">3,800만</td>
              <td className="num tnum">210만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>12%</span></td>
            </tr>
            <tr>
              <td className="name">서울 · 강남역</td>
              <td className="num"><div className="bar-cell"><span className="tnum">38건</span><span className="bar-track"><span className="bar-fill" style={{width: "67%"}}></span></span></div></td>
              <td className="num tnum">6,500만</td>
              <td className="num tnum">340만</td>
              <td className="num"><span className="trend down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="m6 7 11 11M17 7v11H6"/></svg>4%</span></td>
            </tr>
            <tr>
              <td className="name">부산 · 서면</td>
              <td className="num"><div className="bar-cell"><span className="tnum">33건</span><span className="bar-track"><span className="bar-fill" style={{width: "58%"}}></span></span></div></td>
              <td className="num tnum">2,100만</td>
              <td className="num tnum">150만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>15%</span></td>
            </tr>
            <tr>
              <td className="name">인천 · 부평</td>
              <td className="num"><div className="bar-cell"><span className="tnum">29건</span><span className="bar-track"><span className="bar-fill" style={{width: "51%"}}></span></span></div></td>
              <td className="num tnum">1,500만</td>
              <td className="num tnum">110만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>9%</span></td>
            </tr>
            <tr>
              <td className="name">수원 · 인계동</td>
              <td className="num"><div className="bar-cell"><span className="tnum">24건</span><span className="bar-track"><span className="bar-fill" style={{width: "42%"}}></span></span></div></td>
              <td className="num tnum">1,950만</td>
              <td className="num tnum">140만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>11%</span></td>
            </tr>
            <tr>
              <td className="name">대구 · 동성로</td>
              <td className="num"><div className="bar-cell"><span className="tnum">21건</span><span className="bar-track"><span className="bar-fill" style={{width: "37%"}}></span></span></div></td>
              <td className="num tnum">1,800만</td>
              <td className="num tnum">120만</td>
              <td className="num"><span className="trend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 17 17 6M9 6h8v8"/></svg>6%</span></td>
            </tr>
            <tr>
              <td className="name">대전 · 둔산동</td>
              <td className="num"><div className="bar-cell"><span className="tnum">18건</span><span className="bar-track"><span className="bar-fill" style={{width: "32%"}}></span></span></div></td>
              <td className="num tnum">1,650만</td>
              <td className="num tnum">130만</td>
              <td className="num"><span className="trend down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="m6 7 11 11M17 7v11H6"/></svg>2%</span></td>
            </tr>
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
        <a className="see-all" href="#">전체 214건 보기 →</a>
      </div>

      <div className="listing-grid">
        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-041</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">성수동 카페거리, 1층 15평</h3>
          <div className="tag-row">
            <span className="tag">성수동</span>
            <span className="tag">카페 · 디저트</span>
            <span className="tag">1층</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">2,000 / 180<span className="unit"> 만원</span></span>
            <span className="listing-date">3일 전</span>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-039</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">강남역 5분, 22평 음식점 자리</h3>
          <div className="tag-row">
            <span className="tag">강남역</span>
            <span className="tag">음식점 · 주점</span>
            <span className="tag">지하1층</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">3,000 / 250<span className="unit"> 만원</span></span>
            <span className="listing-date">5일 전</span>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-033</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">부평역 인근, 12평 코너 매장</h3>
          <div className="tag-row">
            <span className="tag">부평</span>
            <span className="tag">편의점 · 무인매장</span>
            <span className="tag">코너</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">1,200 / 95<span className="unit"> 만원</span></span>
            <span className="listing-date">1주 전</span>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-030</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">서면 메인거리, 18평 샵인샵 가능</h3>
          <div className="tag-row">
            <span className="tag">서면</span>
            <span className="tag">뷰티 · 헤어</span>
            <span className="tag">2층</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">1,500 / 110<span className="unit"> 만원</span></span>
            <span className="listing-date">1주 전</span>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-027</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">홍대입구 이면도로, 25평 스터디카페 인수</h3>
          <div className="tag-row">
            <span className="tag">홍대입구</span>
            <span className="tag">교육 · 스터디카페</span>
            <span className="tag">2층</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">2,500 / 200<span className="unit"> 만원</span></span>
            <span className="listing-date">2주 전</span>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-top">
            <span className="listing-id tnum">CL-2506-021</span>
            <span className="badge-free">무권리</span>
          </div>
          <h3 className="listing-title">둔산동 주택가, 10평 반찬가게 자리</h3>
          <div className="tag-row">
            <span className="tag">둔산동</span>
            <span className="tag">밀키트 · 반찬</span>
            <span className="tag">1층</span>
          </div>
          <div className="listing-meta">
            <span className="listing-price tnum">900 / 70<span className="unit"> 만원</span></span>
            <span className="listing-date">3주 전</span>
          </div>
        </div>
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
        <a className="feed-item" href="#">
          <span className="feed-tag q">질문</span>
          <div className="feed-body">
            <p className="feed-title">배달앱 수수료 감당 안 되는데 다들 어떻게 버티세요?</p>
            <p className="feed-sub"><span className="author">카페사장1년차</span> · 2시간 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>34</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>58</span>
          </div>
        </a>
        <a className="feed-item" href="#">
          <span className="feed-tag info">정보공유</span>
          <div className="feed-body">
            <p className="feed-title">권리금 없는 자리 찾는 법 정리해봤어요 (계약서 체크리스트 포함)</p>
            <p className="feed-sub"><span className="author">권리금헌터</span> · 5시간 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>61</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>142</span>
          </div>
        </a>
        <a className="feed-item" href="#">
          <span className="feed-tag review">후기</span>
          <div className="feed-body">
            <p className="feed-title">무인 아이스크림 매장 6개월 운영 후기, 매출 공개합니다</p>
            <p className="feed-sub"><span className="author">야간사장</span> · 1일 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>47</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>203</span>
          </div>
        </a>
        <a className="feed-item" href="#">
          <span className="feed-tag study">스터디모집</span>
          <div className="feed-body">
            <p className="feed-title">성수동 카페 상권분석 같이 하실 분 구해요 (주말 오프라인)</p>
            <p className="feed-sub"><span className="author">동네빵집예정</span> · 1일 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>12</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>19</span>
          </div>
        </a>
        <a className="feed-item" href="#">
          <span className="feed-tag q">질문</span>
          <div className="feed-body">
            <p className="feed-title">임대차계약 특약사항에 꼭 넣어야 하는 문구 있을까요?</p>
            <p className="feed-sub"><span className="author">첫창업러</span> · 2일 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>28</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>44</span>
          </div>
        </a>
        <a className="feed-item" href="#">
          <span className="feed-tag info">정보공유</span>
          <div className="feed-body">
            <p className="feed-title">2025년 소상공인 정책자금 신청 후기 + 서류 리스트 공유</p>
            <p className="feed-sub"><span className="author">정책자금덕후</span> · 3일 전</p>
          </div>
          <div className="feed-stats">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z"/></svg>55</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z"/></svg>176</span>
          </div>
        </a>
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

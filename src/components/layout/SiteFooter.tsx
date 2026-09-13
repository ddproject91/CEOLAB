import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <div>
            <Link href="/" className="brandmark">
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
            </Link>
            <p className="tagline">세오랩 — 창업을 연구하고, 성공을 설계하다</p>
            <p>먼저 창업한 사람들의 데이터와 경험이 쌓이는 예비창업자 커뮤니티. 상권, 매물, 정책까지 한 곳에서 검증하세요.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>둘러보기</strong>
              <Link href="/community">커뮤니티</Link>
              <Link href="/realestate">부동산 정보</Link>
              <Link href="/categories">창업 분야</Link>
              <Link href="/franchise">프랜차이즈</Link>
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
  );
}

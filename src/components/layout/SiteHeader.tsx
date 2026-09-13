import Link from "next/link";
import { AuthHeaderActions } from "@/components/auth/AuthHeaderActions";

export function SiteHeader() {
  return (
    <header className="masthead">
      <div className="wrap masthead-row">
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
        <nav className="primary">
          <Link href="/community">커뮤니티</Link>

          <span className="nav-dropdown">
            <Link href="/realestate">부동산 정보</Link>
            <span className="nav-dropdown-menu">
              <Link href="/realestate#listings">무권리 매물 정보</Link>
              <Link href="/realestate#regions">지역별 상권 정보</Link>
            </span>
          </span>

          <Link href="/categories">창업 분야</Link>
          <Link href="/franchise">프랜차이즈</Link>
        </nav>
        <AuthHeaderActions />
      </div>
    </header>
  );
}

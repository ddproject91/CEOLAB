"use client";

import Link from "next/link";
import { useAuth, type Role } from "@/components/auth/AuthProvider";

const ROLE_LABEL: Record<Role, string> = {
  user: "고객",
  recruiter: "모집사",
  broker: "부동산",
  admin: "관리자",
};

export function AuthHeaderActions() {
  const { user, loading, logout } = useAuth();

  if (loading) return <div className="masthead-actions" />;

  if (user) {
    return (
      <div className="masthead-actions">
        <span style={{ fontSize: 13, color: "var(--ink-secondary)" }}>
          {user.name || user.email} <span style={{ color: "var(--accent-deep)" }}>· {ROLE_LABEL[user.role]}</span>
        </span>
        <button type="button" onClick={() => logout()} className="btn btn-ghost">
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className="masthead-actions">
      <Link href="/login" className="btn btn-ghost">로그인</Link>
      <Link href="/signup" className="btn btn-accent">가입하기</Link>
    </div>
  );
}

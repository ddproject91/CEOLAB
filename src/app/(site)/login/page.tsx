"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const { login, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const ok = await login(email, password);
    setSubmitting(false);
    if (ok) router.push("/");
  }

  return (
    <div className="wrap" style={{ maxWidth: 420, paddingTop: 48, paddingBottom: 100 }}>
      <p className="kicker" style={{ marginBottom: 8 }}>Welcome back</p>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 24px", color: "var(--ink)" }}>
        로그인
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>이메일</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>비밀번호</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>

        {authError && <p style={{ color: "var(--down)", fontSize: 13 }}>{authError}</p>}

        <button type="submit" className="btn btn-accent" disabled={submitting} style={{ justifyContent: "center" }}>
          {submitting ? "로그인 중..." : "로그인"}
        </button>

        <p style={{ textAlign: "center", fontSize: 13, color: "var(--ink-muted)" }}>
          아직 계정이 없으신가요? <Link href="/signup" style={{ color: "var(--accent-deep)", fontWeight: 500 }}>회원가입</Link>
        </p>
      </form>

      <style>{`
        .form-input {
          width: 100%;
          border: 1px solid var(--line-strong);
          background: var(--paper-raised);
          color: var(--ink);
          border-radius: 10px;
          padding: 10px 12px;
          font-size: 14px;
          font-family: var(--font-sans);
          outline: none;
        }
        .form-input:focus { border-color: var(--accent); }
      `}</style>
    </div>
  );
}

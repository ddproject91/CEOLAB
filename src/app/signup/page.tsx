"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export default function SignupPage() {
  const router = useRouter();
  const { signup, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [memo, setMemo] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const ok = await signup({ email, password, name, position, phone, memo });
    setSubmitting(false);
    if (ok) router.push("/");
  }

  return (
    <div className="wrap" style={{ maxWidth: 560, paddingTop: 32, paddingBottom: 80 }}>
      <Link href="/" className="brandmark" style={{ marginBottom: 32, display: "inline-flex" }}>
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
      <p className="kicker" style={{ marginBottom: 8 }}>Join CEO LAB</p>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: "var(--ink)" }}>
        회원가입
      </h1>
      <p style={{ color: "var(--ink-secondary)", fontSize: 14, margin: "0 0 32px" }}>
        모든 가입은 고객 등급으로 시작해요. 프랜차이즈 모집사·부동산업자로 활동하고 싶으시면
        가입 후 관리자에게 별도로 문의해주세요.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormField label="이메일">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </FormField>

        <FormField label="비밀번호">
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </FormField>

        <FormField label="성함">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </FormField>

        <div className="grid grid-cols-2 gap-3">
          <FormField label="직급">
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="form-input"
              placeholder="선택 입력"
            />
          </FormField>
          <FormField label="연락처">
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="010-0000-0000"
            />
          </FormField>
        </div>

        <FormField label="메모">
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            rows={3}
            className="form-input"
            placeholder="관심 있는 창업 분야나 지역을 적어주세요 (선택)"
          />
        </FormField>

        {authError && (
          <p style={{ color: "var(--down)", fontSize: 13 }}>{authError}</p>
        )}

        <button type="submit" className="btn btn-accent" disabled={submitting} style={{ justifyContent: "center" }}>
          {submitting ? "가입 처리 중..." : "가입하기"}
        </button>

        <p style={{ textAlign: "center", fontSize: 13, color: "var(--ink-muted)" }}>
          이미 계정이 있으신가요? <Link href="/login" style={{ color: "var(--accent-deep)", fontWeight: 500 }}>로그인</Link>
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

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

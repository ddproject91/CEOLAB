"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";

type Category = "franchise" | "realestate";

const CATEGORY_INFO: Record<Category, { title: string; lede: string; placeholder: string }> = {
  franchise: {
    title: "프랜차이즈 상담 신청",
    lede: "관심 있는 창업 분야나 브랜드를 알려주시면, 담당 모집사가 직접 연락드려요.",
    placeholder: "예: 카페 창업을 알아보고 있어요. 성수동 쪽 매물이나 브랜드 추천 부탁드려요.",
  },
  realestate: {
    title: "부동산 상담 신청",
    lede: "원하시는 지역·평수·예산을 알려주시면, 담당 부동산업자가 매물을 찾아드려요.",
    placeholder: "예: 홍대입구 근처 15평 내외, 보증금 2000/월세 150 정도로 찾고 있어요.",
  },
};

function ConsultForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading } = useAuth();
  const [supabase] = useState(() => createClient());

  const initialCategory: Category = searchParams.get("type") === "realestate" ? "realestate" : "franchise";
  const [category, setCategory] = useState<Category>(initialCategory);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (user) {
      setName((prev) => prev || user.name);
      setPhone((prev) => prev || user.phone);
    }
  }, [user]);

  useEffect(() => {
    const brand = searchParams.get("brand");
    if (brand) {
      setMessage((prev) => prev || `[${brand}] 브랜드에 대해 상담받고 싶어요.`);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);
    setError(null);
    const { error: insertError } = await supabase.from("leads").insert({
      category,
      customer_id: user.id,
      name,
      phone,
      message,
    });
    setSubmitting(false);
    if (insertError) {
      setError(insertError.message);
      return;
    }
    setDone(true);
  }

  const info = CATEGORY_INFO[category];

  if (loading) return null;

  if (!user) {
    return (
      <div className="wrap" style={{ maxWidth: 480, paddingTop: 80, paddingBottom: 100, textAlign: "center" }}>
        <p style={{ color: "var(--ink)", fontWeight: 500, marginBottom: 12 }}>
          상담 신청은 로그인 후 이용할 수 있어요.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/login" className="btn btn-ghost">로그인</Link>
          <Link href="/signup" className="btn btn-accent">회원가입</Link>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="wrap" style={{ maxWidth: 480, paddingTop: 80, paddingBottom: 100, textAlign: "center" }}>
        <p style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
          상담 신청이 접수됐어요
        </p>
        <p style={{ color: "var(--ink-secondary)", fontSize: 14, marginBottom: 24 }}>
          담당자가 확인 후 남겨주신 연락처로 연락드릴게요.
        </p>
        <Link href="/" className="btn btn-ghost">홈으로</Link>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ maxWidth: 560, paddingTop: 32, paddingBottom: 80 }}>
      <p className="kicker" style={{ marginBottom: 8 }}>Consultation</p>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", color: "var(--ink)" }}>
        {info.title}
      </h1>
      <p style={{ color: "var(--ink-secondary)", fontSize: 14, margin: "0 0 28px" }}>{info.lede}</p>

      <div className="flex gap-2" style={{ marginBottom: 24 }}>
        <button
          type="button"
          onClick={() => setCategory("franchise")}
          className="tag"
          style={{
            cursor: "pointer",
            border: "1px solid " + (category === "franchise" ? "var(--accent)" : "var(--line)"),
            background: category === "franchise" ? "var(--accent-soft)" : "var(--paper-raised)",
            color: category === "franchise" ? "var(--accent-deep)" : "var(--ink-secondary)",
          }}
        >
          프랜차이즈 상담
        </button>
        <button
          type="button"
          onClick={() => setCategory("realestate")}
          className="tag"
          style={{
            cursor: "pointer",
            border: "1px solid " + (category === "realestate" ? "var(--accent)" : "var(--line)"),
            background: category === "realestate" ? "var(--accent-soft)" : "var(--paper-raised)",
            color: category === "realestate" ? "var(--accent-deep)" : "var(--ink-secondary)",
          }}
        >
          부동산 상담
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>성함</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>연락처</span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: "var(--ink)" }}>문의 내용</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder={info.placeholder}
            className="form-input"
          />
        </label>

        {error && <p style={{ color: "var(--down)", fontSize: 13 }}>{error}</p>}

        <button type="submit" className="btn btn-accent" disabled={submitting} style={{ justifyContent: "center" }}>
          {submitting ? "접수 중..." : "상담 신청하기"}
        </button>
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

export default function ConsultPage() {
  return (
    <Suspense fallback={null}>
      <ConsultForm />
    </Suspense>
  );
}

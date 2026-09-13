"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth, type Role } from "@/components/auth/AuthProvider";

interface Lead {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
}

const STATUS_LABEL: Record<Lead["status"], string> = {
  new: "신규",
  contacted: "연락완료",
  closed: "종료",
};

export function LeadsTable({
  category,
  allowedRoles,
  title,
}: {
  category: "franchise" | "realestate";
  allowedRoles: Role[];
  title: string;
}) {
  const { user, loading: authLoading } = useAuth();
  const [supabase] = useState(() => createClient());
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading || !user) return;
    let active = true;
    supabase
      .from("leads")
      .select("id, name, phone, message, status, created_at")
      .eq("category", category)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (active) {
          setLeads((data as Lead[]) ?? []);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, [authLoading, user, supabase, category]);

  async function updateStatus(id: string, status: Lead["status"]) {
    setSavingId(id);
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    setSavingId(null);
    if (!error) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    }
  }

  if (authLoading) return null;

  if (!user) {
    return (
      <div className="wrap" style={{ paddingTop: 60, paddingBottom: 100, textAlign: "center" }}>
        <p style={{ color: "var(--ink-secondary)" }}>로그인이 필요합니다.</p>
      </div>
    );
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="wrap" style={{ paddingTop: 60, paddingBottom: 100, textAlign: "center" }}>
        <p style={{ color: "var(--ink-secondary)" }}>이 페이지를 볼 수 있는 권한이 없어요.</p>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ paddingTop: 40, paddingBottom: 80 }}>
      <p className="kicker" style={{ marginBottom: 8 }}>Leads</p>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", color: "var(--ink)" }}>{title}</h1>
      <p style={{ color: "var(--ink-secondary)", fontSize: 14, margin: "0 0 28px" }}>
        고객이 남긴 상담 요청 목록이에요. 연락한 건은 상태를 업데이트해주세요.
      </p>

      {loading ? (
        <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>불러오는 중...</p>
      ) : leads.length === 0 ? (
        <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>아직 접수된 상담 요청이 없어요.</p>
      ) : (
        <div className="table-scroll">
          <table className="region-table">
            <thead>
              <tr>
                <th>성함</th>
                <th>연락처</th>
                <th style={{ width: "40%" }}>문의 내용</th>
                <th>접수일</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="name">{lead.name}</td>
                  <td className="tnum">{lead.phone}</td>
                  <td>{lead.message}</td>
                  <td className="tnum" style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                    {new Date(lead.created_at).toLocaleDateString("ko-KR")}
                  </td>
                  <td>
                    <select
                      value={lead.status}
                      disabled={savingId === lead.id}
                      onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                      style={{
                        border: "1px solid var(--line-strong)",
                        borderRadius: 6,
                        padding: "4px 6px",
                        fontSize: 12,
                        background: "var(--paper-raised)",
                        color: "var(--ink)",
                      }}
                    >
                      {Object.entries(STATUS_LABEL).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

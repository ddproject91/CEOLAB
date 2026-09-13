"use client";

import { useState } from "react";
import type { Role } from "@/components/auth/AuthProvider";
import { updateMemberRoleAction } from "./actions";

export interface MemberRow {
  id: string;
  email: string;
  role: Role;
  name: string;
  position: string;
  phone: string;
  memo: string;
  createdAt: string;
}

const ROLES: Role[] = ["user", "recruiter", "broker", "admin"];
const ROLE_LABEL: Record<Role, string> = {
  user: "고객",
  recruiter: "모집사",
  broker: "부동산",
  admin: "관리자",
};

export function MembersEditor({ initialMembers }: { initialMembers: MemberRow[] }) {
  const [members, setMembers] = useState(initialMembers);
  const [dirtyIds, setDirtyIds] = useState<Set<string>>(new Set());
  const [savingId, setSavingId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, string>>({});

  function patchRole(id: string, role: Role) {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
    setDirtyIds((prev) => new Set(prev).add(id));
  }

  async function save(id: string) {
    const member = members.find((m) => m.id === id);
    if (!member) return;
    setSavingId(id);
    const result = await updateMemberRoleAction(id, member.role);
    setSavingId(null);
    if (result.ok) {
      setDirtyIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setMessages((prev) => ({ ...prev, [id]: "저장됨" }));
    } else {
      setMessages((prev) => ({ ...prev, [id]: result.error }));
    }
  }

  if (members.length === 0) {
    return <p className="text-sm text-gray-400">아직 가입한 회원이 없습니다.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-xs text-gray-500">
            <th className="px-4 py-3 font-medium">담당자명</th>
            <th className="px-4 py-3 font-medium">직급</th>
            <th className="px-4 py-3 font-medium">연락처</th>
            <th className="px-4 py-3 font-medium">이메일</th>
            <th className="px-4 py-3 font-medium">메모</th>
            <th className="px-4 py-3 font-medium">권한</th>
            <th className="px-4 py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-3 font-medium text-gray-900">{m.name || "-"}</td>
              <td className="px-4 py-3 text-gray-700">{m.position || "-"}</td>
              <td className="px-4 py-3 text-gray-700">{m.phone || "-"}</td>
              <td className="px-4 py-3 text-gray-500">{m.email}</td>
              <td className="max-w-[220px] px-4 py-3 text-gray-500">
                <span className="line-clamp-2">{m.memo || "-"}</span>
              </td>
              <td className="px-4 py-3">
                <select
                  value={m.role}
                  onChange={(e) => patchRole(m.id, e.target.value as Role)}
                  className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs outline-none focus:border-[#C9A227]"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {ROLE_LABEL[r]}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => save(m.id)}
                    disabled={!dirtyIds.has(m.id) || savingId === m.id}
                    className="rounded-lg bg-[#16233F] px-3 py-1.5 text-xs font-bold text-white disabled:opacity-40"
                  >
                    {savingId === m.id ? "저장 중..." : "저장"}
                  </button>
                  {messages[m.id] && (
                    <span className="text-[11px] text-gray-400">{messages[m.id]}</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

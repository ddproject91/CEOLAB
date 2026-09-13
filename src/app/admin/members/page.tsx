import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";
import { MembersEditor, type MemberRow } from "./MembersEditor";

export default async function AdminMembersPage() {
  const supabase = getSupabaseAdmin();

  let members: MemberRow[] = [];
  let configured = false;

  if (supabase) {
    configured = true;
    const [{ data: profiles }, { data: usersRes }] = await Promise.all([
      supabase
        .from("profiles")
        .select("id, role, signup_type, name, position, phone, memo, created_at")
        .order("created_at", { ascending: false }),
      supabase.auth.admin.listUsers({ perPage: 1000 }),
    ]);

    const emailById = new Map(usersRes?.users.map((u) => [u.id, u.email ?? ""]) ?? []);

    members = (profiles ?? []).map((p) => ({
      id: p.id,
      email: emailById.get(p.id) ?? "",
      role: p.role,
      signupType: p.signup_type,
      name: p.name ?? "",
      position: p.position ?? "",
      phone: p.phone ?? "",
      memo: p.memo ?? "",
      createdAt: p.created_at,
    }));
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link href="/admin" className="mb-4 inline-block text-xs font-medium text-gray-500 hover:text-[#8A6A16]">
        ← 전체 컬렉션
      </Link>
      <h1 className="mb-1 text-xl font-bold tracking-tight text-[#16233F]">회원 관리</h1>
      <p className="mb-6 text-sm text-gray-500">
        가입 시 남긴 정보를 확인하고, 검토가 끝난 프랜차이즈 모집사·부동산업자에게 권한을 부여하세요.
        신규 가입자는 전부 "고객" 등급으로 시작해요.
      </p>

      {!configured && (
        <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-gray-900">
          Supabase가 설정되지 않았습니다.
        </div>
      )}

      {configured && <MembersEditor initialMembers={members} />}
    </div>
  );
}

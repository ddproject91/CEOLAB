import { loginAction } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const sp = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 py-10">
      <h1 className="mb-1 text-xl font-bold tracking-tight text-[#16233F]">CEO LAB 관리자</h1>
      <p className="mb-6 text-sm text-gray-500">비밀번호를 입력하면 콘텐츠 관리 화면으로 이동합니다.</p>
      <form action={loginAction} className="flex flex-col gap-3">
        <input type="hidden" name="next" value={sp.next ?? "/admin"} />
        <input
          type="password"
          name="password"
          placeholder="관리자 비밀번호"
          autoFocus
          required
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#C9A227]"
        />
        {sp.error && (
          <p className="text-xs font-medium text-red-600">비밀번호가 올바르지 않습니다.</p>
        )}
        <button
          type="submit"
          className="rounded-xl bg-[#16233F] px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllContent } from "@/lib/content";
import { findCollection } from "../collections";
import { FALLBACKS } from "../fallbacks";
import { CollectionEditor } from "./CollectionEditor";

export default async function AdminCollectionPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const meta = findCollection(key);
  if (!meta) notFound();

  const rows = await getAllContent();
  const initialData = rows[key]?.data ?? FALLBACKS[meta.key];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/admin" className="inline-block text-xs font-medium text-gray-500 hover:text-[#8A6A16]">
          ← 전체 컬렉션
        </Link>
        {meta.viewUrl && (
          <Link
            href={meta.viewUrl}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#8A6A16]"
          >
            사이트에서 보기 ↗
          </Link>
        )}
      </div>
      <h1 className="mb-1 text-xl font-bold tracking-tight text-[#16233F]">
        {meta.group} · {meta.label}
      </h1>
      <p className="mb-6 text-sm text-gray-500">항목을 고치고 저장하면 사이트에 바로 반영됩니다.</p>
      <CollectionEditor collectionKey={meta.key} initialData={initialData} />
    </div>
  );
}

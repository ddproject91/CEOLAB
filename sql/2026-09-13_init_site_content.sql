-- CEO LAB 관리자 콘텐츠 저장용 테이블. 서비스 롤 키로만 접근(RLS 불필요).
create table if not exists public.site_content (
  key text primary key,
  data jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- 이미지 업로드용 공개 스토리지 버킷.
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- 누구나 읽기 가능, 쓰기는 서비스 롤만(관리자 업로드 액션이 서비스 롤 키를 사용).
drop policy if exists "images are publicly readable" on storage.objects;
create policy "images are publicly readable" on storage.objects
  for select using (bucket_id = 'images');

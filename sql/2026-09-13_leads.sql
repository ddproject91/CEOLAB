-- 고객(D)이 남기는 상담 요청. category로 프랜차이즈(B용)/부동산(C용) 구분.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('franchise','realestate')),
  customer_id uuid references auth.users(id) on delete set null,
  name text not null default '',
  phone text not null default '',
  message text not null default '',
  status text not null default 'new' check (status in ('new','contacted','closed')),
  created_at timestamptz not null default now()
);
alter table public.leads enable row level security;

-- 로그인한 고객 본인 명의로만 상담 요청 생성 가능.
drop policy if exists "customers can insert own leads" on public.leads;
create policy "customers can insert own leads" on public.leads
  for insert with check (auth.uid() = customer_id);

-- 고객은 본인이 남긴 상담 요청만 조회.
drop policy if exists "customers can read own leads" on public.leads;
create policy "customers can read own leads" on public.leads
  for select using (auth.uid() = customer_id);

-- 모집사(recruiter)/관리자는 프랜차이즈 상담 요청 전체 조회·상태 변경.
drop policy if exists "recruiters can read franchise leads" on public.leads;
create policy "recruiters can read franchise leads" on public.leads
  for select using (
    category = 'franchise' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('recruiter','admin')
    )
  );

drop policy if exists "recruiters can update franchise leads" on public.leads;
create policy "recruiters can update franchise leads" on public.leads
  for update using (
    category = 'franchise' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('recruiter','admin')
    )
  ) with check (
    category = 'franchise' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('recruiter','admin')
    )
  );

-- 부동산업자(broker)/관리자는 부동산 상담 요청 전체 조회·상태 변경.
drop policy if exists "brokers can read realestate leads" on public.leads;
create policy "brokers can read realestate leads" on public.leads
  for select using (
    category = 'realestate' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('broker','admin')
    )
  );

drop policy if exists "brokers can update realestate leads" on public.leads;
create policy "brokers can update realestate leads" on public.leads
  for update using (
    category = 'realestate' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('broker','admin')
    )
  ) with check (
    category = 'realestate' and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role in ('broker','admin')
    )
  );

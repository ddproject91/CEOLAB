-- CEO LAB 회원 프로필. 가입은 전부 role='user'(고객)으로 시작하고,
-- 관리자가 /admin/members 에서 recruiter(모집사)/broker(부동산)/admin으로 승격한다.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'user' check (role in ('user','recruiter','broker','admin')),
  signup_type text not null default 'customer' check (signup_type in ('franchise','realestate','customer')),
  name text not null default '',
  position text not null default '',
  phone text not null default '',
  memo text not null default '',
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- 개인정보(연락처 등)가 포함되어 있어 공개 읽기는 허용하지 않는다.
-- 본인만 자기 행을 읽고 고칠 수 있고, 관리자 화면은 서비스 롤 키로 RLS를 우회해 전체를 본다.
drop policy if exists "users can read own profile" on public.profiles;
create policy "users can read own profile" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "users can update own profile" on public.profiles;
create policy "users can update own profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- 회원가입(auth.users insert) 시 signUp options.data로 넘긴 값을 profiles에 그대로 채운다.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, signup_type, name, position, phone, memo)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'signup_type', 'customer'),
    coalesce(new.raw_user_meta_data->>'name', ''),
    coalesce(new.raw_user_meta_data->>'position', ''),
    coalesce(new.raw_user_meta_data->>'phone', ''),
    coalesce(new.raw_user_meta_data->>'memo', '')
  );
  return new;
end;
$$ language plpgsql security definer set search_path = public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

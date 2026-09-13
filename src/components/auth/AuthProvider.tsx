"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { createClient } from "@/lib/supabase/client";

export type Role = "user" | "recruiter" | "broker" | "admin";
export type SignupType = "franchise" | "realestate" | "customer";

export interface Profile {
  id: string;
  email: string;
  role: Role;
  signupType: SignupType;
  name: string;
  position: string;
  phone: string;
  memo: string;
}

export interface SignupInput {
  email: string;
  password: string;
  signupType: SignupType;
  name: string;
  position: string;
  phone: string;
  memo: string;
}

interface AuthContextValue {
  user: Profile | null;
  loading: boolean;
  authError: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (input: SignupInput) => Promise<boolean>;
  logout: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchProfile(
  supabase: ReturnType<typeof createClient>,
  userId: string,
  email: string,
): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, role, signup_type, name, position, phone, memo")
    .eq("id", userId)
    .maybeSingle();
  if (error || !data) return null;
  return {
    id: data.id,
    email,
    role: data.role,
    signupType: data.signup_type,
    name: data.name ?? "",
    position: data.position ?? "",
    phone: data.phone ?? "",
    memo: data.memo ?? "",
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!active) return;
      if (session?.user) {
        setUser(await fetchProfile(supabase, session.user.id, session.user.email ?? ""));
      }
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!active) return;
      if (session?.user) {
        setUser(await fetchProfile(supabase, session.user.id, session.user.email ?? ""));
      } else {
        setUser(null);
      }
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, [supabase]);

  const login = useCallback(
    async (email: string, password: string) => {
      setAuthError(null);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setAuthError(error.message);
        return false;
      }
      return true;
    },
    [supabase],
  );

  const signup = useCallback(
    async (input: SignupInput) => {
      setAuthError(null);
      const { data, error } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
        options: {
          data: {
            signup_type: input.signupType,
            name: input.name,
            position: input.position,
            phone: input.phone,
            memo: input.memo,
          },
          emailRedirectTo: `${window.location.origin}/`,
        },
      });
      if (error) {
        setAuthError(error.message);
        return false;
      }
      if (!data.session) {
        setAuthError("가입 확인 이메일을 보냈어요. 메일함을 확인해주세요.");
        return false;
      }
      return true;
    },
    [supabase],
  );

  const logout = useCallback(() => {
    supabase.auth.signOut();
  }, [supabase]);

  const refreshProfile = useCallback(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.user) return;
    setUser(await fetchProfile(supabase, session.user.id, session.user.email ?? ""));
  }, [supabase]);

  return (
    <AuthContext.Provider
      value={{ user, loading, authError, login, signup, logout, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

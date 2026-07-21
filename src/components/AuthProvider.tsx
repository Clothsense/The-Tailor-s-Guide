"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved user on mount
    const savedUser = localStorage.getItem("tailoring_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Protect routes
    if (!loading) {
      if (!user && pathname.startsWith("/dashboard")) {
        router.push("/login");
      }
      if (user && (pathname === "/login" || pathname === "/signup")) {
        router.push("/dashboard");
      }
    }
  }, [user, loading, pathname, router]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("tailoring_user", JSON.stringify(userData));
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tailoring_user");
    router.push("/login");
  };

  if (loading) {
    return <div className="min-h-screen bg-[#020617]" />; // Prevent flash while checking auth
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

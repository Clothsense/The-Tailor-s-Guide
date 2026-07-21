"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Tailor Admin", email });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_40%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20">
            <Scissors className="h-8 w-8 text-cyan-300" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to your Tailoring OS dashboard
          </p>
        </div>
        
        <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 sm:text-sm"
                  placeholder="tailor@fashion.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-slate-950/70 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-slate-900"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-cyan-400 hover:text-cyan-300">
              Start your free trial
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

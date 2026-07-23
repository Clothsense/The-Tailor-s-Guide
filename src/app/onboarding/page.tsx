"use client";

import { useState } from "react";
import Link from "next/link";
import { Scissors, ChevronRight, Check, ArrowRight } from "lucide-react";

const steps = ["Business Info", "Account Setup", "Brand Style", "All done!"];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    brandName: "", location: "", type: "",
    email: "", password: "",
    accentColor: "#22d3ee",
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_60%),linear-gradient(135deg,_#020617,_#0f172a)] px-4 py-16">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Tailoring<span className="text-cyan-400">OS</span>
          </Link>
        </div>

        {/* Stepper */}
        <div className="mb-8 flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                  i < step ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : i === step ? "border-cyan-400 bg-slate-950 text-cyan-400"
                  : "border-slate-700 bg-slate-950 text-slate-500"
                }`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`mt-1 hidden text-xs sm:block ${i === step ? "text-cyan-300" : "text-slate-500"}`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 transition-all duration-300 ${i < step ? "bg-cyan-400" : "bg-slate-800"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

          {/* Step 0: Business Info */}
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-white">Tell us about your brand</h2>
                <p className="mt-1 text-sm text-slate-400">This is what your customers will see.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Brand / Shop Name</label>
                <input value={form.brandName} onChange={e => setForm({...form, brandName: e.target.value})}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Ada Styles Couture" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">City / Location</label>
                <input value={form.location} onChange={e => setForm({...form, location: e.target.value})}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Lagos, Nigeria" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Type of tailoring</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none">
                  <option value="">Select type...</option>
                  <option>Ladies fashion</option>
                  <option>Men's fashion</option>
                  <option>Bridal & wedding</option>
                  <option>Corporate wear</option>
                  <option>Native wear</option>
                  <option>General tailoring</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 1: Account Setup */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-white">Create your account</h2>
                <p className="mt-1 text-sm text-slate-400">Your login credentials for the dashboard.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Email address</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="tailor@fashion.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Password</label>
                <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="••••••••" />
              </div>
              <p className="text-xs text-slate-500">By continuing, you agree to our <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a>.</p>
            </div>
          )}

          {/* Step 2: Brand Style */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Customize your brand</h2>
                <p className="mt-1 text-sm text-slate-400">Choose a color that represents your brand identity.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Brand Accent Color</label>
                <div className="flex flex-wrap gap-3">
                  {["#22d3ee","#f59e0b","#a78bfa","#fb7185","#34d399","#f97316"].map(color => (
                    <button key={color} onClick={() => setForm({...form, accentColor: color})}
                      className={`h-10 w-10 rounded-full border-4 transition ${form.accentColor === color ? "border-white scale-110" : "border-transparent"}`}
                      style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/50 p-5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Preview</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-950 font-bold text-lg" style={{ backgroundColor: form.accentColor }}>
                    {(form.brandName || "B").charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{form.brandName || "Your Brand Name"}</p>
                    <p className="text-sm text-slate-400">{form.location || "Your City"}</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-24 rounded-full" style={{ backgroundColor: form.accentColor }} />
              </div>
            </div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Scissors className="h-10 w-10 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">You're all set, {form.brandName || "Tailor"}! 🎉</h2>
                <p className="mt-2 text-slate-400">Your Tailoring OS workspace is ready. Start adding customers and managing orders right away.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 text-left text-sm">
                <p className="text-slate-400">Your unique store link:</p>
                <p className="mt-1 font-medium text-cyan-300">tailoringos.com/shop/{(form.brandName || "your-brand").toLowerCase().replace(/\s+/g, "-")}</p>
              </div>
              <Link href="/dashboard" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Open my dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 3 && (
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button onClick={prev} className="text-sm text-slate-400 hover:text-white">← Back</button>
              ) : <div />}
              <button onClick={next} className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                {step === 2 ? "Finish setup" : "Continue"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {step < 3 && (
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300">Sign in</Link>
          </p>
        )}
      </div>
    </main>
  );
}

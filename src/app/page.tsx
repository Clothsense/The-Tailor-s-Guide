"use client";

import Link from "next/link";
import { Scissors, CheckCircle, Users, BarChart3, Bell, Truck, Palette, CreditCard, ArrowRight, Star, Menu } from "lucide-react";

const features = [
  { icon: Users, title: "Customer Management", desc: "Store profiles, measurements, and order history for every client permanently." },
  { icon: Scissors, title: "Digital Measurement Book", desc: "Record and retrieve body measurements instantly. No more paper books." },
  { icon: BarChart3, title: "Production Pipeline", desc: "Track every order from intake to delivery with a visual Kanban board." },
  { icon: Palette, title: "Design Studio", desc: "Attach sketches, fabric samples, and style notes to every order." },
  { icon: CreditCard, title: "Payments & Invoicing", desc: "Track deposits, balances, and generate receipts in seconds." },
  { icon: Bell, title: "SMS & WhatsApp Marketing", desc: "Send automated reminders and promotional messages to your clients." },
  { icon: Truck, title: "Delivery Management", desc: "Schedule and track dispatches so no garment is ever delivered late." },
  { icon: Users, title: "Customer Portal", desc: "Give clients their own login to track orders and view invoices online." },
];

const plans = [
  {
    name: "Starter",
    price: "₦5,000",
    period: "/month",
    desc: "Perfect for solo tailors just getting started.",
    features: ["Up to 50 customers", "Order pipeline", "Digital measurements", "Email support"],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₦15,000",
    period: "/month",
    desc: "For growing fashion brands and busy studios.",
    features: ["Unlimited customers", "All Starter features", "Customer portal", "SMS & WhatsApp alerts", "Payment tracking", "Priority support"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For fashion houses managing multiple locations.",
    features: ["Everything in Professional", "Custom branding & subdomain", "Multi-staff accounts", "Dedicated account manager", "API access"],
    cta: "Contact us",
    highlight: false,
  },
];

const testimonials = [
  { name: "Adunola Fashions", location: "Lagos, Nigeria", text: "Tailoring OS completely changed how I run my studio. I used to lose customer measurements — now everything is digital and searchable.", avatar: "AF" },
  { name: "Kemi Couture", location: "Abuja, Nigeria", text: "My clients love being able to track their orders themselves. The WhatsApp reminders mean I never have to chase anyone for payment.", avatar: "KC" },
  { name: "Stitch & Style Co.", location: "Port Harcourt, Nigeria", text: "The production pipeline is brilliant. I can see exactly what stage every order is at, across all my staff members.", avatar: "SS" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Tailoring<span className="text-cyan-400">OS</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <Link href="/login" className="transition hover:text-white">Sign in</Link>
            <Link href="/onboarding" className="rounded-full bg-cyan-400 px-5 py-2 font-medium text-slate-950 transition hover:bg-cyan-300">
              Start free trial
            </Link>
          </div>
          <button className="text-slate-400 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.15),_transparent_60%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            🎉 Now with Customer Portal & Multi-Brand Support
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            The complete OS for
            <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              fashion tailors
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Manage customers, measurements, production, payments and delivery — all from one elegant platform. Built specifically for Nigerian fashion designers and tailoring businesses.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/onboarding" className="flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Start your free trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/dashboard" className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 font-medium text-slate-300 transition hover:border-white/30 hover:text-white">
              View demo dashboard
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>

        {/* Mock Dashboard Preview */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-400/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-rose-500" />
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-slate-500">tailoringos.com/dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-6 sm:grid-cols-4">
            {["12.4k Customers", "₦2.4m Revenue", "48 Active Orders", "98% On-Time"].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-slate-800/60 p-4">
                <p className="text-xs text-slate-500">Stat</p>
                <p className="mt-1 text-sm font-semibold text-white">{s}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 px-6 pb-6">
            {["Cutting", "Sewing", "QC", "Ready", "Delivered"].map((stage, i) => (
              <div key={i} className={`rounded-xl border p-3 ${i === 1 ? "border-cyan-400/30 bg-cyan-400/5" : "border-white/5 bg-slate-800/40"}`}>
                <p className="text-xs text-slate-400">{stage}</p>
                <p className="mt-1 text-lg font-bold text-white">{[4, 7, 3, 5, 2][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Everything you need</p>
            <h2 className="mt-3 text-4xl font-bold">Built for how tailors actually work</h2>
            <p className="mt-4 text-lg text-slate-400">Every feature was designed based on real tailoring business workflows.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition hover:border-cyan-400/20 hover:bg-slate-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <f.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">How it works</p>
          <h2 className="mt-3 text-4xl font-bold">Up and running in minutes</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Sign up & set your brand", desc: "Create your account, add your shop name and brand colour. Takes under 2 minutes." },
              { step: "02", title: "Add your customers & orders", desc: "Import existing clients or add them one by one. Record measurements digitally." },
              { step: "03", title: "Share your storefront", desc: "Send your unique link to customers so they can track their orders themselves." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-2xl font-bold text-cyan-300">
                  {s.step}
                </div>
                <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Simple pricing</p>
            <h2 className="mt-3 text-4xl font-bold">Plans for every size of business</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl border p-8 ${plan.highlight ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-transparent" : "border-white/10 bg-slate-900/50"}`}>
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-slate-950">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="mb-1 text-slate-400">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 shrink-0 text-cyan-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/onboarding" className={`mt-8 flex w-full justify-center rounded-xl py-3 text-sm font-semibold transition ${plan.highlight ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300" : "border border-white/10 text-white hover:bg-white/5"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Testimonials</p>
            <h2 className="mt-3 text-4xl font-bold">Loved by tailors across Nigeria</h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-slate-300">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-sm font-bold text-cyan-300">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-indigo-500/10 p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold">Ready to modernize your tailoring business?</h2>
          <p className="mt-4 text-slate-400">Join hundreds of Nigerian fashion designers already using Tailoring OS.</p>
          <Link href="/onboarding" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Start your 14-day free trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-sm text-slate-500">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p className="font-bold text-white">Tailoring<span className="text-cyan-400">OS</span></p>
          <p>© 2026 TailoringOS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

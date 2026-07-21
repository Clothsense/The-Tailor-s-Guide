"use client";

import Link from "next/link";
import { User, Ruler, FileText, Download, Share2 } from "lucide-react";

const measurements = [
  {
    id: "MES-001",
    customer: "Ada Okafor",
    category: "Female",
    lastUpdated: "2 days ago",
    measurements: {
      bust: "38",
      waist: "32",
      hip: "42",
      shoulder: "16",
      gownLength: "60",
    }
  },
  {
    id: "MES-002",
    customer: "Grace Adebayo",
    category: "Female",
    lastUpdated: "1 week ago",
    measurements: {
      bust: "36",
      waist: "30",
      hip: "40",
      shoulder: "15",
      gownLength: "58",
    }
  },
  {
    id: "MES-003",
    customer: "Tolu Ade",
    category: "Male",
    lastUpdated: "3 weeks ago",
    measurements: {
      chest: "42",
      waist: "36",
      shoulder: "18",
      trouserLength: "40",
      sleeve: "25",
    }
  }
];

export default function MeasurementsPage() {
  // Mocking the active selected measurement
  const activeProfile = measurements[0];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Sizing & Profiles</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Digital Measurement Book</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Record, retrieve, and compare body measurements for male and female clients. Say goodbye to paper books.
              </p>
            </div>
            <button className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
              New Measurement
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          {/* Sidebar list of measurements */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">Profiles</h2>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-slate-300">{measurements.length} total</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name or ID..."
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              {measurements.map((m) => (
                <button
                  key={m.id}
                  className={`flex flex-col gap-1 rounded-xl border px-4 py-3 text-left transition ${
                    m.id === activeProfile.id
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-transparent bg-slate-950/50 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{m.customer}</span>
                    <span className="text-xs text-slate-400">{m.id}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`rounded-full px-2 py-0.5 ${m.category === "Female" ? "bg-fuchsia-400/10 text-fuchsia-300" : "bg-blue-400/10 text-blue-300"}`}>
                      {m.category}
                    </span>
                    <span className="text-slate-500">Updated {m.lastUpdated}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Measurement Profile */}
          <div className="flex flex-col gap-6 rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-2xl font-bold text-cyan-200">
                  {activeProfile.customer.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{activeProfile.customer}</h2>
                  <div className="mt-1 flex items-center gap-3 text-sm text-slate-400">
                    <span>ID: {activeProfile.id}</span>
                    <span>•</span>
                    <span>{activeProfile.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  PDF
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  Edit
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-300">Core Measurements (inches)</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(activeProfile.measurements).map(([key, value]) => (
                    <div key={key} className="rounded-xl border border-white/5 bg-slate-950/50 p-4">
                      <p className="text-sm text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{value}"</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-300">Notes & References</h3>
                <div className="rounded-xl border border-white/5 bg-slate-950/50 p-4">
                  <p className="text-sm text-slate-300">
                    Customer prefers a slightly looser fit around the waist for gowns. Needs extra padding on the shoulder.
                  </p>
                </div>
                <div className="rounded-xl border border-dashed border-white/20 bg-slate-950/30 p-8 text-center">
                  <p className="text-sm text-slate-400">No reference images uploaded</p>
                  <button className="mt-2 text-sm text-cyan-300 hover:text-cyan-200">
                    + Add Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

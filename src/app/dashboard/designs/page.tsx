"use client";

import { Search, Plus, Filter, Image as ImageIcon, Sparkles, Pencil } from "lucide-react";

const designs = [
  { id: "DSN-842", customer: "Ada Okafor", name: "Wedding Gown Concept", type: "Bridal", date: "Today" },
  { id: "DSN-841", customer: "Grace Adebayo", name: "Corporate Suit", type: "Suit", date: "Yesterday" },
  { id: "DSN-840", customer: "Tolu Ade", name: "Senator Embroidery", type: "Native Wear", date: "2 days ago" },
];

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Style Inspiration</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Design Studio</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Manage customer design instructions, fabric images, sketches, and style requirements.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
              <Plus className="h-4 w-4" />
              New Design
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recent Designs</h2>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {designs.map((design) => (
                <div key={design.id} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:bg-slate-900">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 text-slate-400">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">{design.name}</p>
                    <p className="text-sm text-slate-400">{design.customer}</p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                      {design.type}
                    </span>
                    <p className="mt-2 text-xs text-slate-500">{design.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-slate-900/80 to-cyan-500/10 p-6 shadow-xl shadow-black/30">
            <h2 className="text-xl font-semibold text-white">Active Design Board</h2>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-medium text-white">Ada Okafor</h3>
                  <p className="text-sm text-cyan-300">Wedding Gown Concept</p>
                </div>
                <button className="rounded-full bg-white/10 p-2 text-slate-300 hover:text-white">
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-400">
                  <ImageIcon className="mx-auto h-6 w-6 opacity-50" />
                  <p className="mt-2 text-xs">Upload Pinterest Ref</p>
                </div>
                <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-400">
                  <Sparkles className="mx-auto h-6 w-6 opacity-50" />
                  <p className="mt-2 text-xs">Fabric Sample</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-300">Specifications</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">V-Neck</span>
                  <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">Long Sleeves</span>
                  <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">Lace Embroidery</span>
                  <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">No Slit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Ruler, FileText, Download, Share2, Plus, X } from "lucide-react";

interface MeasurementProfile {
  id: string;
  customer: string;
  category: string;
  lastUpdated: string;
  measurements: {
    bust?: string;
    waist?: string;
    hip?: string;
    shoulder?: string;
    gownLength?: string;
    chest?: string;
    trouserLength?: string;
    sleeve?: string;
  };
}

const initialMeasurements = [
  {
    id: "MES-001",
    customer: "Ada Okafor",
    category: "Female",
    lastUpdated: "2 days ago",
    measurements: { bust: "38", waist: "32", hip: "42", shoulder: "16", gownLength: "60" }
  },
  {
    id: "MES-002",
    customer: "Grace Adebayo",
    category: "Female",
    lastUpdated: "1 week ago",
    measurements: { bust: "36", waist: "30", hip: "40", shoulder: "15", gownLength: "58" }
  },
  {
    id: "MES-003",
    customer: "Tolu Ade",
    category: "Male",
    lastUpdated: "3 weeks ago",
    measurements: { chest: "42", waist: "36", shoulder: "18", trouserLength: "40", sleeve: "25" }
  }
];

export default function MeasurementsPage() {
  const [list, setList] = useState<MeasurementProfile[]>(initialMeasurements);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [customerName, setCustomerName] = useState("");
  const [category, setCategory] = useState("Female");
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [length, setLength] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tailoring_measurements");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  const activeProfile = list[activeIndex] || list[0] || initialMeasurements[0];

  const handleAddMeasurement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName) return;

    const newProfile: MeasurementProfile = {
      id: `MES-${Math.floor(100 + Math.random() * 900)}`,
      customer: customerName,
      category,
      lastUpdated: "Just now",
      measurements: category === "Female" ? {
        bust: bust || "0",
        waist: waist || "0",
        hip: hip || "0",
        shoulder: shoulder || "0",
        gownLength: length || "0",
      } : {
        chest: bust || "0",
        waist: waist || "0",
        shoulder: shoulder || "0",
        trouserLength: length || "0",
        sleeve: "0",
      }
    };

    const updated = [newProfile, ...list];
    setList(updated);
    localStorage.setItem("tailoring_measurements", JSON.stringify(updated));
    setActiveIndex(0); // Focus on the newly added profile

    // Reset Form
    setCustomerName("");
    setBust("");
    setWaist("");
    setHip("");
    setShoulder("");
    setLength("");
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">New Size Profile</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddMeasurement} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-sm font-medium text-slate-300">Customer Name</label>
                <input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="Ada Okafor" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300">{category === "Female" ? "Bust" : "Chest"}</label>
                  <input value={bust} onChange={(e) => setBust(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="inches" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300">Waist</label>
                  <input value={waist} onChange={(e) => setWaist(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="inches" />
                </div>
                {category === "Female" && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Hip</label>
                    <input value={hip} onChange={(e) => setHip(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="inches" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-300">Shoulder</label>
                  <input value={shoulder} onChange={(e) => setShoulder(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="inches" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-300">{category === "Female" ? "Gown Length" : "Trouser Length"}</label>
                  <input value={length} onChange={(e) => setLength(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none" placeholder="inches" />
                </div>
              </div>
              
              <button type="submit" className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Save Sizing Profile
              </button>
            </form>
          </div>
        </div>
      )}

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
            <button onClick={() => setIsModalOpen(true)} className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 flex items-center gap-2">
              <Plus className="h-4 w-4" /> New Sizing
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          {/* Sidebar list of measurements */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">Profiles</h2>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-slate-300">{list.length} total</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name or ID..."
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              {list.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col gap-1 rounded-xl border px-4 py-3 text-left transition ${
                    idx === activeIndex
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
                    Customer prefers a custom tailored fit with slightly looser specs around the waist. Always record double-checked sizing details.
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

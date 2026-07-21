"use client";

import { Calendar, Truck, CheckCircle2, Search, Filter } from "lucide-react";

const deliveries = [
  { id: "DEL-001", customer: "Grace Adebayo", outfit: "Corporate Suit", time: "10:00 AM", status: "Out for Delivery", rider: "John Doe" },
  { id: "DEL-002", customer: "Tolu Ade", outfit: "Senator Wear", time: "12:30 PM", status: "Pending Pickup", rider: "Self Pickup" },
  { id: "DEL-003", customer: "Mariam Yusuf", outfit: "Kaftan Set", time: "03:00 PM", status: "Scheduled", rider: "Logistics Hub" },
];

export default function DeliveriesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">Logistics & Tracking</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Delivery Management</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Track outgoing orders, coordinate with dispatch riders, and ensure on-time delivery for every customer.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-300">
              <Calendar className="h-4 w-4" />
              Schedule Delivery
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
            <p className="text-sm text-slate-400">Deliveries Today</p>
            <p className="mt-2 text-3xl font-semibold text-white">4</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
            <p className="text-sm text-slate-400">Pending Pickup</p>
            <p className="mt-2 text-3xl font-semibold text-white">12</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 shadow-lg">
            <p className="text-sm text-emerald-200">On-Time Rate</p>
            <p className="mt-2 text-3xl font-semibold text-emerald-400">98%</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-semibold text-white">Today's Schedule</h2>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10">
                <Search className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-950/80 p-5 transition hover:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{delivery.customer}</h3>
                    <p className="text-sm text-slate-400">{delivery.outfit}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
                  <div>
                    <p className="text-xs text-slate-500">Time</p>
                    <p className="text-sm font-medium text-slate-200">{delivery.time}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Method</p>
                    <p className="text-sm font-medium text-slate-200">{delivery.rider}</p>
                  </div>
                  <div className="w-32 text-right">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      delivery.status === "Out for Delivery" ? "bg-amber-400/10 text-amber-300" :
                      delivery.status === "Pending Pickup" ? "bg-cyan-400/10 text-cyan-300" :
                      "bg-slate-800 text-slate-300"
                    }`}>
                      {delivery.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

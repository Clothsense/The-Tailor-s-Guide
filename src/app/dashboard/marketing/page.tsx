"use client";

import { MessageSquare, Mail, Bell, Send, Users } from "lucide-react";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-300">Customer Engagement</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Notifications & Marketing</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send automated reminders, SMS promotions, and WhatsApp messages to keep clients engaged.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {/* Campaign Builder */}
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white">Create Campaign</h2>
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Select Audience</label>
                <div className="mt-2 flex gap-3">
                  <button className="flex-1 rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-2 text-sm text-cyan-300">All Customers</button>
                  <button className="flex-1 rounded-xl border border-white/10 bg-slate-950/50 py-2 text-sm text-slate-400 hover:bg-white/5">VIP Only</button>
                  <button className="flex-1 rounded-xl border border-white/10 bg-slate-950/50 py-2 text-sm text-slate-400 hover:bg-white/5">Specific Segment</button>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-300">Channel</label>
                <div className="mt-2 flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 py-2 text-sm text-emerald-300">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 py-2 text-sm text-slate-400 hover:bg-white/5">
                    <Bell className="h-4 w-4" />
                    SMS
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Message Content</label>
                <textarea 
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-white outline-none focus:border-cyan-400/50"
                  placeholder="Hello! We are launching a new festive collection..."
                />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
                <Send className="h-4 w-4" />
                Send Campaign
              </button>
            </div>
          </div>

          {/* Automations */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white">Active Automations</h2>
              <div className="mt-5 space-y-3">
                {[
                  { name: "Ready for Fitting Reminder", status: "Active", count: "12 sent today" },
                  { name: "Birthday Discounts", status: "Active", count: "2 sent today" },
                  { name: "Payment Overdue Alert", status: "Paused", count: "-" },
                ].map((auto) => (
                  <div key={auto.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <div>
                      <p className="font-medium text-white">{auto.name}</p>
                      <p className="text-sm text-slate-400">{auto.count}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${auto.status === "Active" ? "bg-emerald-400/10 text-emerald-300" : "bg-slate-800 text-slate-400"}`}>
                      {auto.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
               <h2 className="text-xl font-semibold text-white">Campaign History</h2>
               <div className="mt-8 flex h-full flex-col items-center justify-center text-center text-slate-400">
                 <Mail className="mb-2 h-8 w-8 opacity-50" />
                 <p>No recent campaigns sent</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

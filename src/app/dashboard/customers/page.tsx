"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Plus, UserPlus, Filter, MoreVertical, TrendingUp, Users, Star, X } from "lucide-react";

const summaryStats = [
  { label: "Total Customers", value: "12.4k", trend: "+18%", icon: Users, color: "text-blue-400" },
  { label: "VIP Clients", value: "1,280", trend: "+7%", icon: Star, color: "text-amber-400" },
  { label: "New This Week", value: "186", trend: "+12%", icon: TrendingUp, color: "text-emerald-400" },
];

const initialCustomers = [
  { name: "Ada Okafor", phone: "+234 803 111 2234", category: "VIP", lastOrder: "Wedding Gown", status: "Active", initials: "AO" },
  { name: "Mariam Yusuf", phone: "+234 810 444 9988", category: "Regular", lastOrder: "Kaftan Set", status: "Pending", initials: "MY" },
  { name: "Grace Adebayo", phone: "+234 706 222 4455", category: "VIP", lastOrder: "Corporate Suit", status: "Active", initials: "GA" },
];

const activity = [
  { title: "Measurement updated", detail: "Ada Okafor • 2 hours ago" },
  { title: "New order received", detail: "Kemi Bello • 5 hours ago" },
  { title: "Balance reminder sent", detail: "Tolu Ade • Today" },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New Customer Form State
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCategory, setNewCategory] = useState("Regular");

  useEffect(() => {
    const saved = localStorage.getItem("tailoring_customers");
    if (saved) {
      setCustomers(JSON.parse(saved));
    }
  }, []);

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    const initials = newName.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "C";
    
    const newCustomer = {
      name: newName,
      phone: newPhone,
      category: newCategory,
      lastOrder: "None",
      status: "Active",
      initials,
    };
    
    const updatedList = [newCustomer, ...customers];
    setCustomers(updatedList);
    localStorage.setItem("tailoring_customers", JSON.stringify(updatedList));
    
    setNewName("");
    setNewPhone("");
    setNewCategory("Regular");
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Add New Customer</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddCustomer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300">Full Name</label>
                <input required value={newName} onChange={(e) => setNewName(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Phone Number</label>
                <input required value={newPhone} onChange={(e) => setNewPhone(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none" placeholder="+234..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Category</label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none">
                  <option>Regular</option>
                  <option>VIP</option>
                </select>
              </div>
              
              <button type="submit" className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Save Customer
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Client Directory</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Customer management</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Store customer profiles, communication details, order history, and favorite styles in a single place.
              </p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
              <UserPlus className="h-4 w-4" />
              New Customer
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {summaryStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-cyan-300">Directory</p>
                <h2 className="mt-1 text-xl font-semibold text-white">All Customers ({customers.length})</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    className="w-full rounded-full border border-white/10 bg-slate-950/70 py-2 pl-9 pr-4 text-sm text-slate-100 outline-none focus:border-cyan-400/50"
                    placeholder="Search customers..."
                  />
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 hover:bg-slate-800">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {customers.map((customer, idx) => (
                <div key={idx} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:bg-slate-900/50 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-lg font-bold text-cyan-200">
                      {customer.initials}
                    </div>
                    <div>
                      <p className="font-medium text-white">{customer.name}</p>
                      <p className="text-sm text-slate-400">{customer.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:gap-6 text-sm">
                    <div className="flex gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${customer.category === "VIP" ? "bg-amber-400/10 text-amber-300" : "bg-white/10 text-slate-300"}`}>
                        {customer.category}
                      </span>
                      <span className="hidden rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 sm:inline-block">
                        {customer.lastOrder}
                      </span>
                    </div>
                    <button className="text-slate-400 hover:text-white">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900/80 to-indigo-500/15 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Recent activity</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Engagement log</h2>
              </div>
              <Link href="/dashboard/orders" className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100">
                View orders →
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {activity.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

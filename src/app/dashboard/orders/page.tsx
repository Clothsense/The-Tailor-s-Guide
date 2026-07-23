"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Filter, Clock, CheckCircle2, ChevronRight, LayoutDashboard, ListFilter, MoreVertical, ArrowLeft, ArrowRight } from "lucide-react";

const initialOrders = [
  { id: "ORD-1042", customer: "Ada Okafor", style: "Wedding Gown", stage: "Cutting", amount: "₦420,000" },
  { id: "ORD-1038", customer: "Mariam Yusuf", style: "Kaftan Set", stage: "Sewing", amount: "₦185,000" },
  { id: "ORD-1034", customer: "Grace Adebayo", style: "Corporate Suit", stage: "Quality Control", amount: "₦310,000" },
  { id: "ORD-1039", customer: "Kemi Bello", style: "Agbada", stage: "Cutting", amount: "₦150,000" },
  { id: "ORD-1040", customer: "Tolu Ade", style: "Senator Wear", stage: "Ready for Pickup", amount: "₦120,000" },
];

const stages = ["Order Received", "Measurement Taken", "Cutting", "Sewing", "Quality Control", "Ready for Pickup"];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState("");
  const [newStyle, setNewStyle] = useState("");
  const [newAmount, setNewAmount] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tailoring_orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  const saveOrders = (newOrders: any[]) => {
    setOrders(newOrders);
    localStorage.setItem("tailoring_orders", JSON.stringify(newOrders));
  };

  const moveStage = (orderId: string, direction: "prev" | "next") => {
    const updated = orders.map((order) => {
      if (order.id === orderId) {
        const currentIndex = stages.indexOf(order.stage);
        if (direction === "next" && currentIndex < stages.length - 1) {
          return { ...order, stage: stages[currentIndex + 1] };
        }
        if (direction === "prev" && currentIndex > 0) {
          return { ...order, stage: stages[currentIndex - 1] };
        }
      }
      return order;
    });
    saveOrders(updated);
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer || !newStyle || !newAmount) return;

    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: newCustomer,
      style: newStyle,
      stage: "Order Received",
      amount: newAmount.startsWith("₦") ? newAmount : `₦${newAmount}`,
    };

    const updated = [newOrder, ...orders];
    saveOrders(updated);

    // Reset fields
    setNewCustomer("");
    setNewStyle("");
    setNewAmount("");
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Create New Order</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <Plus className="h-5 w-5 rotate-45" />
              </button>
            </div>
            
            <form onSubmit={handleCreateOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300">Customer Name</label>
                <input required value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none" placeholder="Ada Okafor" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Outfit Style</label>
                <input required value={newStyle} onChange={(e) => setNewStyle(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none" placeholder="Ankara Gown" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Amount (Cost)</label>
                <input required value={newAmount} onChange={(e) => setNewAmount(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none" placeholder="₦150,000" />
              </div>
              
              <button type="submit" className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Create Order
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="mx-auto flex max-w-[1400px] flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Pipeline Tracker</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Production Workflow</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Track every order from intake to delivery. Move cards to update production stages.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10">
                <LayoutDashboard className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10">
                <ListFilter className="h-4 w-4" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
                <Plus className="h-4 w-4" />
                New Order
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 shadow-lg backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                className="w-64 rounded-full border border-white/10 bg-slate-950/70 py-2 pl-9 pr-4 text-sm text-slate-100 outline-none focus:border-cyan-400/50"
                placeholder="Search orders..."
              />
            </div>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Pipeline Board */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {stages.map((stage, stageIndex) => {
            const stageOrders = orders.filter(o => o.stage === stage);
            
            return (
              <div key={stage} className="flex w-80 shrink-0 snap-center flex-col gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-medium text-slate-200">{stage}</h3>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-300">
                    {stageOrders.length}
                  </span>
                </div>
                
                <div className="flex flex-col gap-3">
                  {stageOrders.map(order => (
                    <div key={order.id} className="group rounded-xl border border-white/10 bg-slate-950/80 p-4 shadow-lg transition hover:border-cyan-400/30 hover:bg-slate-900">
                      <div className="flex items-start justify-between">
                        <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-300">
                          {order.id}
                        </span>
                        <div className="flex gap-1">
                           <button 
                             onClick={() => moveStage(order.id, "prev")}
                             disabled={stageIndex === 0}
                             className="rounded p-1 text-slate-500 hover:bg-white/10 hover:text-white disabled:opacity-30"
                           >
                             <ArrowLeft className="h-4 w-4" />
                           </button>
                           <button 
                             onClick={() => moveStage(order.id, "next")}
                             disabled={stageIndex === stages.length - 1}
                             className="rounded p-1 text-slate-500 hover:bg-white/10 hover:text-white disabled:opacity-30"
                           >
                             <ArrowRight className="h-4 w-4" />
                           </button>
                        </div>
                      </div>
                      <p className="mt-3 font-medium text-white">{order.customer}</p>
                      <p className="text-sm text-slate-400">{order.style}</p>
                      
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-xs">
                        <span className="font-semibold text-emerald-300">{order.amount}</span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="h-3 w-3" />
                          <span>3 days left</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {stageOrders.length === 0 && (
                    <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5">
                      <p className="text-sm text-slate-500">No orders here</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

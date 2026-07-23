"use client";

import Link from "next/link";
import { Package, CreditCard, CalendarClock, ChevronRight, CheckCircle2, Clock, Truck, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const mockOrders = [
  { id: "ORD-1042", name: "Wedding Gown", stage: "Sewing", stageIndex: 3, amount: "₦420,000", paid: "₦200,000", dueDate: "Aug 15, 2026", tailor: "Ada Styles Couture" },
  { id: "ORD-1039", name: "Kaftan Set", stage: "Cutting", stageIndex: 2, amount: "₦85,000", paid: "₦85,000", dueDate: "Jul 28, 2026", tailor: "Ada Styles Couture" },
];

const stages = ["Order Received", "Measurement Taken", "Cutting", "Sewing", "Quality Control", "Ready for Pickup"];

export default function CustomerDashboard() {
  const [user, setUser] = useState<{ name: string; phone: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("customer_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const activeOrder = mockOrders[0];
  const totalOwed = mockOrders.reduce((acc, o) => {
    const total = parseInt(o.amount.replace(/[^\d]/g, ""));
    const paid = parseInt(o.paid.replace(/[^\d]/g, ""));
    return acc + (total - paid);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-xl font-bold">Tailoring<span className="text-amber-400">OS</span></Link>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center font-bold text-slate-900">
              {user?.name?.charAt(0) || "C"}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-8">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hi, {user?.name?.split(" ")[0] || "there"} 👋</h1>
          <p className="mt-1 text-gray-500">Here's an update on your orders with Ada Styles Couture.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50"><Package className="h-5 w-5 text-blue-500" /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900">{mockOrders.length}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50"><CreditCard className="h-5 w-5 text-rose-500" /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Balance Due</p>
                <p className="text-2xl font-bold text-gray-900">₦{(totalOwed / 1000).toFixed(0)}k</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50"><CalendarClock className="h-5 w-5 text-amber-500" /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Next Ready</p>
                <p className="text-lg font-bold text-gray-900">Jul 28</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Order Tracker */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">Currently in production</p>
              <h2 className="mt-1 text-xl font-bold text-gray-900">{activeOrder.name}</h2>
              <p className="text-sm text-gray-400">{activeOrder.id} · {activeOrder.tailor}</p>
            </div>
            <Link href={`/customer/track/${activeOrder.id}`} className="flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 font-medium">
              Full details <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex min-w-max items-center gap-0">
              {stages.map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                      i < activeOrder.stageIndex ? "border-amber-400 bg-amber-400 text-white"
                      : i === activeOrder.stageIndex ? "border-amber-400 bg-white text-amber-500"
                      : "border-gray-200 bg-white text-gray-300"
                    }`}>
                      {i < activeOrder.stageIndex ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className={`mt-1.5 w-16 text-center text-[10px] leading-tight ${i <= activeOrder.stageIndex ? "text-gray-700" : "text-gray-300"}`}>{s}</span>
                  </div>
                  {i < stages.length - 1 && (
                    <div className={`h-0.5 w-8 ${i < activeOrder.stageIndex ? "bg-amber-400" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Orders</h2>
            <Link href="/customer/orders" className="text-sm text-amber-500 hover:text-amber-400 font-medium flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {mockOrders.map(order => (
              <Link key={order.id} href={`/customer/track/${order.id}`} className="block rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-amber-200 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{order.name}</p>
                    <p className="text-sm text-gray-400">{order.id} · Due {order.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      order.stage === "Ready for Pickup" ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                    }`}>{order.stage}</span>
                    <p className="mt-1 text-sm font-medium text-gray-700">{order.amount}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

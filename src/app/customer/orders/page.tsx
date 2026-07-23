"use client";

import Link from "next/link";
import { CheckCircle2, Clock, ChevronRight } from "lucide-react";

const stages = ["Order Received", "Measurement Taken", "Cutting", "Sewing", "Quality Control", "Ready for Pickup"];

const mockOrders = [
  { id: "ORD-1042", name: "Wedding Gown", stage: "Sewing", stageIndex: 3, amount: "₦420,000", paid: "₦200,000", dueDate: "Aug 15, 2026", tailor: "Ada Styles Couture" },
  { id: "ORD-1039", name: "Kaftan Set", stage: "Cutting", stageIndex: 2, amount: "₦85,000", paid: "₦85,000", dueDate: "Jul 28, 2026", tailor: "Ada Styles Couture" },
];

export default function CustomerOrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/customer/dashboard" className="text-sm text-gray-500 hover:text-gray-800">← Dashboard</Link>
          <Link href="/" className="text-xl font-bold">Tailoring<span className="text-amber-400">OS</span></Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <p className="mt-1 text-gray-500">Track every outfit from intake to delivery.</p>

        <div className="mt-8 space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{order.name}</h2>
                  <p className="text-sm text-gray-400">{order.id} · {order.tailor}</p>
                </div>
                <Link href={`/customer/track/${order.id}`} className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600 hover:bg-amber-100">
                  Track <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stage Progress */}
              <div className="mt-6 overflow-x-auto">
                <div className="flex min-w-max items-center">
                  {stages.map((s, i) => (
                    <div key={s} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs ${
                          i < order.stageIndex ? "border-amber-400 bg-amber-400 text-white"
                          : i === order.stageIndex ? "border-amber-400 bg-white text-amber-500"
                          : "border-gray-200 bg-white text-gray-300"
                        }`}>
                          {i < order.stageIndex ? <CheckCircle2 className="h-3.5 w-3.5" /> : i + 1}
                        </div>
                        <span className={`mt-1 w-14 text-center text-[9px] leading-tight ${i <= order.stageIndex ? "text-gray-600" : "text-gray-300"}`}>{s}</span>
                      </div>
                      {i < stages.length - 1 && (
                        <div className={`h-0.5 w-7 ${i < order.stageIndex ? "bg-amber-400" : "bg-gray-200"}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-gray-50 pt-4 text-sm">
                <div>
                  <p className="text-gray-400">Total Cost</p>
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                </div>
                <div>
                  <p className="text-gray-400">Amount Paid</p>
                  <p className="font-semibold text-emerald-600">{order.paid}</p>
                </div>
                <div>
                  <p className="text-gray-400">Due Date</p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-amber-500" />{order.dueDate}</p>
                </div>
                <div>
                  <p className="text-gray-400">Current Stage</p>
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-0.5 font-medium text-amber-600">{order.stage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

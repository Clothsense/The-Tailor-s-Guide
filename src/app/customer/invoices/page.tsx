"use client";

import Link from "next/link";
import { Download, CheckCircle, Clock } from "lucide-react";

const invoices = [
  { id: "INV-2001", order: "ORD-1042", name: "Wedding Gown", date: "Jul 1, 2026", total: "₦420,000", paid: "₦200,000", balance: "₦220,000", status: "Part Paid" },
  { id: "INV-2002", order: "ORD-1039", name: "Kaftan Set", date: "Jul 5, 2026", total: "₦85,000", paid: "₦85,000", balance: "₦0", status: "Fully Paid" },
];

export default function CustomerInvoicesPage() {
  const totalBalance = invoices.reduce((acc, inv) => {
    return acc + parseInt(inv.balance.replace(/[^\d]/g, ""));
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/customer/dashboard" className="text-sm text-gray-500 hover:text-gray-800">← Dashboard</Link>
          <Link href="/" className="text-xl font-bold">Tailoring<span className="text-amber-400">OS</span></Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
            <p className="mt-1 text-gray-500">Your payment history and outstanding balances.</p>
          </div>
        </div>

        {/* Summary */}
        {totalBalance > 0 && (
          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-rose-600 font-medium">Total Outstanding Balance</p>
                <p className="text-3xl font-bold text-rose-700 mt-1">₦{totalBalance.toLocaleString()}</p>
              </div>
              <button className="rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-400">
                Pay All
              </button>
            </div>
          </div>
        )}

        {/* Invoices */}
        <div className="space-y-4">
          {invoices.map(inv => (
            <div key={inv.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-400">{inv.id}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      inv.status === "Fully Paid" ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                    }`}>
                      {inv.status === "Fully Paid" ? <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" />{inv.status}</span> : <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{inv.status}</span>}
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">{inv.name}</h3>
                  <p className="text-sm text-gray-400">{inv.order} · Issued {inv.date}</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600 hover:bg-gray-100">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4 border-t border-gray-50 pt-4">
                <div>
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="mt-0.5 font-semibold text-gray-900">{inv.total}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Paid</p>
                  <p className="mt-0.5 font-semibold text-emerald-600">{inv.paid}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Balance</p>
                  <p className={`mt-0.5 font-semibold ${inv.balance === "₦0" ? "text-emerald-600" : "text-rose-600"}`}>
                    {inv.balance === "₦0" ? "Cleared ✓" : inv.balance}
                  </p>
                </div>
              </div>

              {inv.balance !== "₦0" && (
                <button className="mt-4 w-full rounded-xl bg-amber-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-300">
                  Pay {inv.balance} Balance
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

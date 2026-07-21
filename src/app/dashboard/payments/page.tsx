"use client";

import { Wallet, Receipt, TrendingUp, CreditCard, Download } from "lucide-react";

const payments = [
  { id: "PAY-101", customer: "Ada Okafor", order: "ORD-1042", total: "₦420,000", paid: "₦200,000", balance: "₦220,000", status: "Part Paid" },
  { id: "PAY-102", customer: "Grace Adebayo", order: "ORD-1034", total: "₦310,000", paid: "₦310,000", balance: "₦0", status: "Fully Paid" },
  { id: "PAY-103", customer: "Kemi Bello", order: "ORD-1039", total: "₦150,000", paid: "₦0", balance: "₦150,000", status: "Unpaid" },
];

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-300">Financials</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Payments & Invoicing</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Track deposits, outstanding balances, and generate receipts for your tailoring orders.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-amber-300">
              <Receipt className="h-4 w-4" />
              Record Payment
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
            <div className="flex justify-between">
              <p className="text-sm text-slate-400">Total Revenue (Month)</p>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-white">₦2.4m</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
            <div className="flex justify-between">
              <p className="text-sm text-slate-400">Outstanding Balances</p>
              <Wallet className="h-4 w-4 text-rose-400" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-white">₦850k</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
            <div className="flex justify-between">
              <p className="text-sm text-slate-400">Pending Invoices</p>
              <CreditCard className="h-4 w-4 text-cyan-400" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-white">14</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Total Cost</th>
                  <th className="pb-3 font-medium">Amount Paid</th>
                  <th className="pb-3 font-medium">Balance</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {payments.map((pay) => (
                  <tr key={pay.id} className="transition hover:bg-white/5">
                    <td className="py-4 font-medium text-white">{pay.customer}</td>
                    <td className="py-4">{pay.order}</td>
                    <td className="py-4">{pay.total}</td>
                    <td className="py-4 text-emerald-400">{pay.paid}</td>
                    <td className="py-4 text-rose-300">{pay.balance}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        pay.status === "Fully Paid" ? "bg-emerald-400/10 text-emerald-300" :
                        pay.status === "Part Paid" ? "bg-amber-400/10 text-amber-300" :
                        "bg-rose-400/10 text-rose-300"
                      }`}>
                        {pay.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-slate-400 hover:text-white">
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

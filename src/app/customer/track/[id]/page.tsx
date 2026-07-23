import Link from "next/link";
import { CheckCircle2, Circle, Clock, Phone, MessageSquare } from "lucide-react";

const stages = ["Order Received", "Measurement Taken", "Cutting", "Sewing", "Quality Control", "Ready for Pickup"];

const ordersDB: Record<string, {
  id: string; name: string; stageIndex: number; amount: string; paid: string;
  dueDate: string; tailor: string; phone: string;
  timeline: { stage: string; date: string; note: string }[];
  fabrics: string[];
  specs: string[];
}> = {
  "ORD-1042": {
    id: "ORD-1042", name: "Wedding Gown", stageIndex: 3, amount: "₦420,000", paid: "₦200,000",
    dueDate: "August 15, 2026", tailor: "Ada Styles Couture", phone: "+234 803 111 2234",
    timeline: [
      { stage: "Order Received", date: "Jul 1, 2026", note: "Order confirmed and payment deposit received." },
      { stage: "Measurement Taken", date: "Jul 3, 2026", note: "Full body measurements recorded. Customer approved design sketch." },
      { stage: "Cutting", date: "Jul 8, 2026", note: "Fabric cut and ready for sewing." },
      { stage: "Sewing", date: "Jul 14, 2026", note: "Currently in sewing. Est. completion Jul 20." },
    ],
    fabrics: ["White French Lace", "Ivory Satin Lining", "Pearl Beading"],
    specs: ["V-Neck", "Long Train", "Lace Embroidery", "Corset Back", "No Sleeves"],
  },
  "ORD-1039": {
    id: "ORD-1039", name: "Kaftan Set", stageIndex: 2, amount: "₦85,000", paid: "₦85,000",
    dueDate: "July 28, 2026", tailor: "Ada Styles Couture", phone: "+234 803 111 2234",
    timeline: [
      { stage: "Order Received", date: "Jul 5, 2026", note: "Order confirmed. Full payment received." },
      { stage: "Measurement Taken", date: "Jul 6, 2026", note: "Measurements taken." },
      { stage: "Cutting", date: "Jul 10, 2026", note: "Currently being cut." },
    ],
    fabrics: ["Blue Ankara Cotton", "Gold Trim"],
    specs: ["Round Neck", "Wide Sleeve", "Mid-Length"],
  },
};

export default async function OrderTrackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = ordersDB[id];

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">Order not found</p>
          <Link href="/customer/dashboard" className="mt-4 inline-block text-amber-500 hover:underline">Back to dashboard</Link>
        </div>
      </div>
    );
  }

  const balance = parseInt(order.amount.replace(/[^\d]/g, "")) - parseInt(order.paid.replace(/[^\d]/g, ""));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/customer/orders" className="text-sm text-gray-500 hover:text-gray-800">← All Orders</Link>
          <Link href="/" className="text-xl font-bold">Tailoring<span className="text-amber-400">OS</span></Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-8">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">{order.id}</span>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{order.name}</h1>
            <p className="text-gray-500">{order.tailor}</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${order.phone}`} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Phone className="h-4 w-4" /> Call tailor
            </a>
            <a href="#" className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400">
              <MessageSquare className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Stage Progress */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-5">Production Progress</h2>
          <div className="overflow-x-auto">
            <div className="flex min-w-max items-center">
              {stages.map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-bold text-sm transition ${
                      i < order.stageIndex ? "border-amber-400 bg-amber-400 text-white"
                      : i === order.stageIndex ? "border-amber-400 bg-amber-50 text-amber-500"
                      : "border-gray-200 bg-white text-gray-300"
                    }`}>
                      {i < order.stageIndex ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className={`mt-1.5 w-16 text-center text-[10px] leading-tight font-medium ${i <= order.stageIndex ? "text-gray-700" : "text-gray-300"}`}>{s}</span>
                  </div>
                  {i < stages.length - 1 && <div className={`mx-1 h-0.5 w-8 ${i < order.stageIndex ? "bg-amber-400" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Timeline */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-700 mb-5">Production Timeline</h2>
            <div className="space-y-4">
              {stages.map((s, i) => {
                const event = order.timeline.find(t => t.stage === s);
                const done = i < order.stageIndex;
                const current = i === order.stageIndex;
                return (
                  <div key={s} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${done ? "bg-amber-400" : current ? "border-2 border-amber-400 bg-amber-50" : "border-2 border-gray-200 bg-white"}`}>
                        {done ? <CheckCircle2 className="h-4 w-4 text-white" /> : <Circle className={`h-3 w-3 ${current ? "text-amber-400" : "text-gray-300"}`} />}
                      </div>
                      {i < stages.length - 1 && <div className={`w-0.5 flex-1 mt-1 ${done ? "bg-amber-300" : "bg-gray-100"}`} style={{ minHeight: "24px" }} />}
                    </div>
                    <div className="pb-4">
                      <p className={`text-sm font-semibold ${done || current ? "text-gray-900" : "text-gray-300"}`}>{s}</p>
                      {event && <p className="mt-0.5 text-xs text-gray-400">{event.date}</p>}
                      {event && <p className="mt-1 text-xs text-gray-500">{event.note}</p>}
                      {!event && <p className="mt-0.5 text-xs text-gray-300">Upcoming</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Payment Summary */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">Payment Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Cost</span>
                  <span className="font-semibold text-gray-900">{order.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount Paid</span>
                  <span className="font-semibold text-emerald-600">{order.paid}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-3 text-sm">
                  <span className="text-gray-500">Outstanding Balance</span>
                  <span className={`font-bold ${balance > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {balance > 0 ? `₦${balance.toLocaleString()}` : "Fully Paid ✓"}
                  </span>
                </div>
              </div>
              {balance > 0 && (
                <button className="mt-4 w-full rounded-xl bg-amber-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-300">
                  Pay Outstanding Balance
                </button>
              )}
            </div>

            {/* Outfit Specs */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">Outfit Specifications</h2>
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Fabrics</p>
                <div className="flex flex-wrap gap-2">
                  {order.fabrics.map(f => <span key={f} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{f}</span>)}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Style Details</p>
                <div className="flex flex-wrap gap-2">
                  {order.specs.map(s => <span key={s} className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">{s}</span>)}
                </div>
              </div>
            </div>

            {/* Due Date */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-amber-700 font-medium">Estimated Ready Date</p>
                  <p className="text-lg font-bold text-amber-900">{order.dueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

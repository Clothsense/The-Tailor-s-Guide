"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Scissors, Star, MapPin, Phone, MessageSquare, X, Check } from "lucide-react";

const portfolio = [
  { name: "Wedding Gown Collection", type: "Bridal" },
  { name: "Corporate Blazer Set", type: "Suit" },
  { name: "Aso-Ebi Lace", type: "Native Wear" },
  { name: "Evening Kaftan", type: "Native Wear" },
  { name: "Senator Embroidery", type: "Native Wear" },
  { name: "Jumpsuit Design", type: "Casual" },
];

const reviews = [
  { name: "Chioma O.", rating: 5, text: "Amazing work! My wedding gown was absolutely perfect." },
  { name: "Biodun A.", rating: 5, text: "Very professional and delivered on time. Highly recommended." },
  { name: "Fatima L.", rating: 4, text: "Great quality fabrics and stitching. Will use again." },
];

export default function BrandStorePage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = use(params);
  const brandName = brand.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [style, setStyle] = useState("Native Wear");
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate saving the order request to localStorage so the tailor can see it in orders list
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: name,
      style: style,
      stage: "Order Received",
      amount: "₦TBD (Awaiting pricing)",
    };

    const savedOrders = localStorage.getItem("tailoring_orders");
    const currentOrders = savedOrders ? JSON.parse(savedOrders) : [];
    const updated = [newOrder, ...currentOrders];
    localStorage.setItem("tailoring_orders", JSON.stringify(updated));

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setIsModalOpen(false);
      setName("");
      setPhone("");
      setDesc("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">
            ← TailoringOS
          </Link>
          <Link href="/customer/login" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-amber-300">
            Track my order
          </Link>
        </div>
      </header>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-gray-100 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request Custom Outfit</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {success ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Order Request Sent!</h4>
                <p className="mt-2 text-sm text-gray-500">The tailor will contact you shortly to confirm measurements and pricing.</p>
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Full Name</label>
                  <input required value={name} onChange={e => setName(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-amber-400 focus:outline-none" placeholder="Ada Okafor" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input required value={phone} onChange={e => setPhone(e.target.value)} type="text" className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-amber-400 focus:outline-none" placeholder="+234..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Outfit Style</label>
                  <select value={style} onChange={e => setStyle(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-amber-400 focus:outline-none">
                    <option>Native Wear</option>
                    <option>Bridal Gown</option>
                    <option>Corporate Suit</option>
                    <option>Casual Wear</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Special Instructions / Details</label>
                  <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-amber-400 focus:outline-none" placeholder="E.g., V-neck style with gold embroidery" />
                </div>
                <button type="submit" className="mt-6 w-full rounded-xl bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-300">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-400 text-3xl font-bold text-slate-900">
            {brandName.charAt(0)}
          </div>
          <h1 className="text-4xl font-bold">{brandName}</h1>
          <div className="mt-3 flex items-center justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Lagos, Nigeria</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9 (128 reviews)</span>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Premium fashion tailoring for bridal, corporate, and native wear. Delivering elegance and precision since 2018.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => setIsModalOpen(true)} className="rounded-full bg-amber-400 px-6 py-2.5 font-medium text-slate-900 hover:bg-amber-300">
              Place an Order
            </button>
            <a href="tel:+2348031112234" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 font-medium text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 space-y-16">

        {/* Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Services</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Bridal Gowns", "Corporate Suits", "Native Wear", "Casual Wear", "Alterations", "Embroidery"].map((service) => (
              <div key={service} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                <Scissors className="mx-auto h-6 w-6 text-amber-400" />
                <p className="mt-2 text-sm font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700">
                  <Scissors className="h-8 w-8 text-amber-400 opacity-60" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <span className="mt-1 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="mt-6 space-y-4">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-gray-100 p-5">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="mt-2 text-sm text-gray-600">"{r.text}"</p>
                <p className="mt-2 text-sm font-medium text-gray-800">— {r.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to place an order?</h2>
          <p className="mt-2 text-slate-400">Sign up in seconds and track every step of your outfit production online.</p>
          <button onClick={() => setIsModalOpen(true)} className="mt-6 inline-block rounded-full bg-amber-400 px-8 py-3 font-semibold text-slate-900 hover:bg-amber-300">
            Order Now
          </button>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-400">
        Powered by <Link href="/" className="font-medium text-gray-600 hover:underline">TailoringOS</Link> · {brandName}
      </footer>
    </div>
  );
}

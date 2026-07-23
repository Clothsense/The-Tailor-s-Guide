"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomerLoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("customer_user", JSON.stringify({ name, phone }));
    router.push("/customer/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/20">
            <Scissors className="h-8 w-8 text-amber-500" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Track your order</h2>
          <p className="mt-2 text-sm text-gray-500">Sign in to see your order status and invoices</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name" type="text" required
                value={name} onChange={e => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                placeholder="Ada Okafor"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone" type="text" required
                value={phone} onChange={e => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                placeholder="+234 803 000 0000"
              />
            </div>
            <button type="submit" className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-300">
              View my orders
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an order yet?{" "}
            <Link href="/shop/ada-styles" className="font-medium text-amber-500 hover:text-amber-400">
              Find a tailor
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          Are you a tailor?{" "}
          <Link href="/login" className="text-gray-600 font-medium hover:underline">Sign in to your dashboard</Link>
        </p>
      </div>
    </main>
  );
}

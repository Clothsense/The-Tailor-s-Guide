const stats = [
  { label: "Total Customers", value: "12.4k", change: "+18%" },
  { label: "Orders This Month", value: "1,286", change: "+9%" },
  { label: "Revenue", value: "₦84.2m", change: "+14%" },
  { label: "Delayed Orders", value: "24", change: "-6%" },
];

const workflow = [
  "Order Received",
  "Measurement Taken",
  "Design Approved",
  "Fabric Inspection",
  "Cutting",
  "Sewing",
  "Quality Control",
  "Ready for Pickup",
];

const modules = [
  { title: "Customer Management", href: "/dashboard/customers" },
  { title: "Digital Measurement Book", href: "/dashboard" },
  { title: "Production Workflow", href: "/dashboard/orders" },
  { title: "Payments & Delivery", href: "/dashboard" },
  { title: "Promotions & SMS", href: "/dashboard" },
  { title: "Reports & Analytics", href: "/dashboard" },
];

const recentOrders = [
  { id: "ORD-1042", customer: "Ada Okafor", status: "In Sewing", date: "Today" },
  { id: "ORD-1038", customer: "Mariam Yusuf", status: "Ready for Fitting", date: "Tomorrow" },
  { id: "ORD-1034", customer: "Grace Adebayo", status: "Delivered", date: "Yesterday" },
];

const upcomingDeliveries = [
  { customer: "Kemi Bello", time: "09:30 AM", outfit: "Wedding Gown" },
  { customer: "Tolu Ade", time: "12:00 PM", outfit: "Corporate Suit" },
  { customer: "Nneka Chidi", time: "04:00 PM", outfit: "Kaftan Set" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#07111f_0%,_#111827_45%,_#020617_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 pulse-slow" />
                Tailoring & Fashion Production OS
              </div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Run your boutique, showroom, and production floor from one elegant command center.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-300">
                Track customers, measurements, delivery dates, payments, and progress in real time with a polished workflow built for fashion brands.
              </p>
            </div>

            <div className="drift rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-5 shadow-lg shadow-cyan-900/20">
              <p className="text-sm text-slate-400">Production Efficiency</p>
              <p className="mt-2 text-4xl font-semibold text-white">93%</p>
              <p className="mt-2 text-sm text-emerald-300">Up 11% from last week</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20 backdrop-blur">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between gap-2">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-sm font-medium text-emerald-300">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Production Workflow</p>
                <h2 className="mt-1 text-xl font-semibold text-white">From order to delivery</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                Live tracking
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/80 to-indigo-500/20 p-6 shadow-xl shadow-black/30">
            <p className="text-sm text-cyan-300">Core Modules</p>
            <div className="mt-4 space-y-3">
              {modules.map((module) => (
                <a key={module.title} href={module.href} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 transition hover:border-cyan-400/30 hover:bg-slate-900">
                  <span className="text-sm font-medium text-slate-200">{module.title}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Recent Orders</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Latest activity</h2>
              </div>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 hover:bg-white/10">
                View all
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                  <div>
                    <p className="font-medium text-white">{order.customer}</p>
                    <p className="text-sm text-slate-400">{order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-cyan-200">{order.status}</p>
                    <p className="text-sm text-slate-400">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Upcoming Deliveries</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Today&apos;s schedule</h2>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {upcomingDeliveries.map((delivery) => (
                <div key={delivery.customer} className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{delivery.customer}</p>
                      <p className="text-sm text-slate-400">{delivery.outfit}</p>
                    </div>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                      {delivery.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
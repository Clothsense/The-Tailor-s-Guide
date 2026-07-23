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
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <p className="text-base font-medium text-slate-350">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between gap-2">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
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
                <p className="text-sm font-semibold text-cyan-300">Production Workflow</p>
                <h2 className="mt-1 text-2xl font-bold text-white">From order to delivery</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                Live tracking
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-base font-semibold text-cyan-100">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-bold text-cyan-200">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300">Revenue Analytics</p>
              <h2 className="mt-1 text-2xl font-bold text-white">Monthly Trend</h2>
            </div>
            
            {/* Visual Bar Chart */}
            <div className="mt-6 flex items-end gap-3 h-28 px-2 border-b border-white/10">
              {[
                { label: "Feb", height: "h-[30%]" },
                { label: "Mar", height: "h-[45%]" },
                { label: "Apr", height: "h-[65%]" },
                { label: "May", height: "h-[50%]" },
                { label: "Jun", height: "h-[85%]" },
                { label: "Jul", height: "h-[95%]" },
              ].map(bar => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className={`w-full rounded-t-lg bg-gradient-to-t from-indigo-500 to-cyan-400 ${bar.height} transition-all duration-300 group-hover:from-indigo-400 group-hover:to-cyan-300`} />
                  <span className="text-[11px] text-slate-500 font-semibold">{bar.label}</span>
                </div>
              ))}
            </div>
            
            {/* Stage Allocation */}
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold text-slate-400">Order Stage Breakdown</p>
              <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-slate-950">
                <div className="bg-cyan-400 h-full w-[25%]" title="Received: 25%" />
                <div className="bg-indigo-500 h-full w-[40%]" title="Sewing: 40%" />
                <div className="bg-amber-400 h-full w-[15%]" title="QC: 15%" />
                <div className="bg-emerald-400 h-full w-[20%]" title="Ready: 20%" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400 justify-between">
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Received</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Sewing</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> QC</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-300">Recent Orders</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Latest activity</h2>
              </div>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-300 hover:bg-white/10">
                View all
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4">
                  <div>
                    <p className="text-base font-bold text-white">{order.customer}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold text-cyan-300">{order.status}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-300">Upcoming Deliveries</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Today&apos;s schedule</h2>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {upcomingDeliveries.map((delivery) => (
                <div key={delivery.customer} className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-white">{delivery.customer}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{delivery.outfit}</p>
                    </div>
                    <span className="rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-200">
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
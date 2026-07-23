"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Scissors, ShoppingBag, Palette, CalendarClock, Wallet, MessageSquare, LogOut, UserCircle, X, Settings } from "lucide-react";
import { useAuth } from "./AuthProvider";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/measurements", label: "Measurements", icon: Scissors },
  { href: "/dashboard/orders", label: "Orders & Pipeline", icon: ShoppingBag },
  { href: "/dashboard/designs", label: "Design Studio", icon: Palette },
  { href: "/dashboard/deliveries", label: "Deliveries", icon: CalendarClock },
  { href: "/dashboard/payments", label: "Payments", icon: Wallet },
  { href: "/dashboard/marketing", label: "Marketing", icon: MessageSquare },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside 
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/5 bg-slate-950 px-4 py-6 text-slate-200 transition-transform duration-300 ease-in-out md:static md:h-[calc(100vh-73px)] md:shrink-0 md:translate-x-0 md:bg-slate-950/50 md:backdrop-blur-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6 md:hidden">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Tailoring<span className="text-cyan-400">OS</span>
          </Link>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          <p className="mb-4 pl-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Modules
          </p>
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-slate-900 hover:text-cyan-300"
                  }`}
                >
                  <link.icon className="h-5.5 w-5.5 shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {user && (
          <div className="mt-8 border-t border-white/10 pt-4">
            <div className="mb-4 flex items-center gap-3 px-3">
              <UserCircle className="h-9 w-9 text-slate-400 shrink-0" />
              <div className="overflow-hidden">
                <p className="truncate text-base font-semibold text-white">{user.name}</p>
                <p className="truncate text-sm text-slate-400">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose?.();
                logout();
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold text-slate-400 transition hover:bg-rose-500/10 hover:text-rose-400"
            >
              <LogOut className="h-5.5 w-5.5 shrink-0" />
              Sign out
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

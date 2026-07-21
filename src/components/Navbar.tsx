"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 px-4 py-4 shadow-sm backdrop-blur-md sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Tailoring<span className="text-cyan-400">OS</span>
          </Link>
        </div>
        
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

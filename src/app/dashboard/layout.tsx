"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col relative overflow-hidden">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(true)} />

      <div className="flex flex-1 items-stretch">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="min-w-0 flex-1 relative w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
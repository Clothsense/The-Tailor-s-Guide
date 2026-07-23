"use client";

import { useState, useEffect } from "react";
import { Settings, Palette, Users, MessageSquare, Save, UserPlus, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [shopName, setShopName] = useState("Ada Styles Couture");
  const [accentColor, setAccentColor] = useState("#22d3ee");
  const [currency, setCurrency] = useState("NGN (₦)");
  const [staff, setStaff] = useState([
    { id: 1, name: "Kola Smith", role: "Cutter" },
    { id: 2, name: "Blessing Okafor", role: "Sewing" },
  ]);
  const [newStaffName, setNewStaffName] = useState("");
  const [newStaffRole, setNewStaffRole] = useState("Cutter");
  const [whatsappTemplate, setWhatsappTemplate] = useState("Hello {customer_name}, your outfit {outfit_name} is now in the {stage} stage. Thank you for choosing us!");
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("settings_shop_name");
    const savedColor = localStorage.getItem("settings_accent_color");
    const savedCurrency = localStorage.getItem("settings_currency");
    const savedStaff = localStorage.getItem("settings_staff");
    const savedTemplate = localStorage.getItem("settings_whatsapp_template");

    if (savedName) setShopName(savedName);
    if (savedColor) setAccentColor(savedColor);
    if (savedCurrency) setCurrency(savedCurrency);
    if (savedStaff) setStaff(JSON.parse(savedStaff));
    if (savedTemplate) setWhatsappTemplate(savedTemplate);
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("settings_shop_name", shopName);
    localStorage.setItem("settings_accent_color", accentColor);
    localStorage.setItem("settings_currency", currency);
    localStorage.setItem("settings_whatsapp_template", whatsappTemplate);

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStaffName) return;

    const newMember = {
      id: Date.now(),
      name: newStaffName,
      role: newStaffRole,
    };

    const updatedStaff = [...staff, newMember];
    setStaff(updatedStaff);
    localStorage.setItem("settings_staff", JSON.stringify(updatedStaff));
    setNewStaffName("");
  };

  const handleDeleteStaff = (id: number) => {
    const updatedStaff = staff.filter(s => s.id !== id);
    setStaff(updatedStaff);
    localStorage.setItem("settings_staff", JSON.stringify(updatedStaff));
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-5xl flex-col gap-6">
        
        {/* Header */}
        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Configurations</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Workspace Settings</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Customize your public storefront, manage staff permissions, and adjust automated messaging templates.
              </p>
            </div>
          </div>
        </div>

        {/* Form and Staff split grid */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Main Settings Form */}
          <div className="md:col-span-2 rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30 space-y-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-cyan-400" />
              General Preferences
            </h2>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300">Shop / Business Name</label>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-300">Default Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option>NGN (₦)</option>
                    <option>USD ($)</option>
                    <option>GBP (£)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300">Brand Color Style</label>
                  <div className="mt-1 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-white/20" style={{ backgroundColor: accentColor }} />
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="h-8 rounded cursor-pointer bg-transparent border-0 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <h3 className="text-sm font-medium text-cyan-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Message Templates
                </h3>
                <label className="block text-sm font-medium text-slate-300">WhatsApp Notification Template</label>
                <textarea
                  value={whatsappTemplate}
                  onChange={(e) => setWhatsappTemplate(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white focus:border-cyan-400 focus:outline-none text-sm"
                />
                <p className="mt-1 text-xs text-slate-500">Variables available: &#123;customer_name&#125;, &#123;outfit_name&#125;, &#123;stage&#125;</p>
              </div>

              {saveSuccess && (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-emerald-400 text-sm">
                  Settings saved successfully!
                </div>
              )}

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                <Save className="h-4 w-4" /> Save Settings
              </button>
            </form>
          </div>

          {/* Staff Manager Column */}
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/30 space-y-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-400" />
              Staff Roster
            </h2>

            <form onSubmit={handleAddStaff} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-400">Add Staff Member</label>
                <input
                  type="text"
                  value={newStaffName}
                  onChange={(e) => setNewStaffName(e.target.value)}
                  placeholder="Staff name"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none text-sm"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={newStaffRole}
                  onChange={(e) => setNewStaffRole(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none text-xs"
                >
                  <option>Cutter</option>
                  <option>Sewing</option>
                  <option>Quality Control</option>
                  <option>Delivery Driver</option>
                </select>
                <button
                  type="submit"
                  className="flex items-center gap-1 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
                >
                  <UserPlus className="h-4.5 w-4.5" />
                </button>
              </div>
            </form>

            <div className="space-y-3 pt-3 border-t border-white/5">
              {staff.map(member => (
                <div key={member.id} className="flex items-center justify-between rounded-xl bg-slate-950/40 p-3 border border-white/5">
                  <div>
                    <p className="text-sm font-medium text-white">{member.name}</p>
                    <span className="text-xs text-cyan-300 bg-cyan-300/10 px-2 py-0.5 rounded-full mt-1 inline-block">{member.role}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteStaff(member.id)}
                    className="text-slate-500 hover:text-rose-400 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {staff.length === 0 && (
                <p className="text-xs text-slate-500 text-center py-4">No staff members configured</p>
              )}
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}

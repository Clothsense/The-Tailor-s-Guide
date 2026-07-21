import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Tailoring OS
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Manage your fashion production with precision.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Track customers, digital measurements, and order workflows from one elegant command center.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded-full bg-cyan-400 px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            Open dashboard
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 text-center font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Learn more
          </a>
        </div>
      </section>
    </main>
  );
}

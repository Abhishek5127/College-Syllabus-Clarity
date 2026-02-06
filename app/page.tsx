import Hero from "@/app/components/hero";
import SyllabusCanvas from "@/app/components/SyllabusCanvas";
import Link from "next/link";
import { departments } from "@/app/data/syllabus-data";
export default function Home() {
  return (
    <div className="text-[color:var(--foreground)]">
      <Hero />
      <SyllabusCanvas />
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-black/10 bg-[color:var(--surface)] p-8 shadow-[0_24px_60px_-36px_rgba(15,61,62,0.65)]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Department Library
              </p>
              <h2 className="text-3xl text-[color:var(--brand)]">
                Pick a department to start your semester plan.
              </h2>
              <p className="text-sm text-[color:var(--muted)]">
                All syllabi follow the same structure so you can compare workload
                and outcomes quickly.
              </p>
            </div>
            <Link
              href="/select-department"
              className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_-24px_rgba(15,61,62,0.9)]"
            >
              Start Exploring
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="rounded-2xl border border-black/10 bg-gray-600 p-5"
              >
                <h3 className="text-xl font-semibold text-[color:var(--brand)]">
                  {dept.name}
                </h3>
                <p className="text-sm text-[color:var(--muted)]">
                  {dept.tagline}
                </p>
                <p className="mt-3 text-xs text-[color:var(--muted)]">
                  {dept.semesters.length} semesters available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-black/10 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-[color:var(--muted)]">
          <p>© 2026 Syllabus Atlas. Built for student clarity.</p>
          <div className="flex gap-3">
            <span>Privacy</span>
            <span>Support</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

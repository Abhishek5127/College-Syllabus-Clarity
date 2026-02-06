import React from 'react'
import Link from 'next/link'
import { departmentSummaries } from "@/app/data/departments"

const SyllabusCanvas = () => {
  const highlights = [
    {
      title: "Semester Snapshots",
      description:
        "Each semester is summarized with focus, key subjects, outcomes, and assessment style.",
    },
    {
      title: "Department-first Flow",
      description:
        "Start with your department and instantly narrow to the right semester path.",
    },
    {
      title: "Study Planning",
      description:
        "Use outcomes and assessments to plan study weeks and exam prep.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Semester Blueprint
          </p>
          <h2 className="text-3xl md:text-4xl text-[color:var(--brand)]">
            Build a semester map that actually makes sense.
          </h2>
          <p className="text-lg text-[color:var(--muted)]">
            The syllabus explorer organizes courses by department and semester so
            you can find everything fast, compare expectations, and plan week by
            week with clarity.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-4 shadow-[0_12px_40px_-24px_rgba(15,61,62,0.6)]"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/select-department"
              className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(15,61,62,0.8)] transition hover:translate-y-[-1px]"
            >
              Explore Syllabi
            </Link>
            <button className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[color:var(--brand)]">
              Download Sample Plan
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--surface-strong)] p-6 shadow-[0_24px_60px_-36px_rgba(15,61,62,0.6)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Departments Live
          </p>
          <div className="mt-6 space-y-4">
            {departmentSummaries.map((dept) => (
              <div
                key={dept.id}
                className="rounded-2xl bg-gray-600 px-4 py-4 backdrop-blur"
              >
                <p className="text-lg font-semibold text-[color:var(--brand)]">
                  {dept.name}
                </p>
                <p className="text-sm text-[color:var(--muted)]">
                  {dept.tagline}
                </p>
                <p className="mt-2 text-xs text-[color:var(--muted)]">
                  {dept.semesterCount} semesters mapped
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SyllabusCanvas

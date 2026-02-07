"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { departmentSummaries, getDepartment } from "@/app/data/departments";

export default function Page() {
  const [departmentId, setDepartmentId] = useState("");
  const [semesterId, setSemesterId] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [departmentData, setDepartmentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const departmentCache = useRef({});

  const departmentSummary = useMemo(
    () => departmentSummaries.find((item) => item.id === departmentId),
    [departmentId]
  );

  useEffect(() => {
    let isActive = true;
    if (!departmentId) {
      setDepartmentData(null);
      setIsLoading(false);
      return () => {
        isActive = false;
      };
    }

    const cached = departmentCache.current[departmentId];
    if (cached) {
      setDepartmentData(cached);
      setIsLoading(false);
      return () => {
        isActive = false;
      };
    }

    setDepartmentData(null);
    setIsLoading(true);

    getDepartment(departmentId)
      .then((data) => {
        if (!isActive) return;
        if (data) {
          departmentCache.current[departmentId] = data;
        }
        setDepartmentData(data);
        setIsLoading(false);
      })
      .catch(() => {
        if (!isActive) return;
        setDepartmentData(null);
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [departmentId]);

  const semesters = departmentData?.semesters ?? [];
  const selectedSemester = semesters.find((item) => item.id === semesterId);
  const subjectDetails =
    selectedSemester?.subjectDetails?.[subjectName] ?? null;
  const overview = subjectDetails?.overview ?? null;
  const textBooks = subjectDetails?.textBooks ?? [];

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10 bg-[color:var(--surface)]">
        <div className="mx-auto flex w-full flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Syllabus Atlas
            </p>
            <h1 className="text-2xl text-[color:var(--brand)]">
              Select your department & semester
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[color:var(--brand)]"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-12">
        <section className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-6 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.6)]">
          <h2 className="text-xl font-semibold text-[color:var(--brand)]">
            Build your syllabus view
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Choose a department first, then a semester to reveal the syllabus
            map.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Department
              </label>
              <select
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--foreground)]"
                value={departmentId}
                onChange={(event) => {
                  setDepartmentId(event.target.value);
                  setSemesterId("");
                  setSubjectName("");
                }}
              >
                <option value="">Select Department...</option>
                {departmentSummaries.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Semester
              </label>
              <select
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--foreground)]"
                value={semesterId}
                onChange={(event) => {
                  setSemesterId(event.target.value);
                  setSubjectName("");
                }}
                disabled={!departmentId || isLoading}
              >
                <option value="">
                  {!departmentId
                    ? "Select department first"
                    : isLoading
                      ? "Loading semesters..."
                      : "Select Semester..."}
                </option>
                {semesters.map((semester) => (
                  <option key={semester.id} value={semester.id}>
                    {semester.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-[color:var(--surface-strong)] p-4 text-sm text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--brand)]">Tip</p>
            <p className="mt-1">
              Use the outcomes to plan revision blocks and prep assignments
              early.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-[color:var(--surface)] p-6 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.6)]">
          {!selectedSemester ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-[color:var(--muted)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">
                Syllabus Preview
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--brand)]">
                Select a semester to see details
              </h3>
              <p className="mt-2 text-sm">
                The syllabus overview will appear here with subject lists and
                outcomes.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {(departmentSummary?.name ?? departmentData?.name) || ""} - {selectedSemester.label}
                </p>
                <h2 className="mt-2 text-3xl text-[color:var(--brand)]">
                  {selectedSemester.focus}
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[color:var(--surface-strong)] p-4">
                <h3 className="text-lg font-semibold text-[color:var(--brand)]">Subjects</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedSemester.subjects.map((subject) => {
                    const isActive = subject === subjectName;
                    return (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => setSubjectName(subject)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          isActive
                            ? "border-[color:var(--brand)] bg-[color:var(--brand)] text-[#0b0c0f]"
                            : "border-white/10 bg-[color:var(--surface)] text-[color:var(--muted)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                        }`}
                      >
                        {subject}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[color:var(--surface-strong)] p-6">
                <h3 className="text-xl font-semibold text-[color:var(--brand)]">Subject Syllabus</h3>
                  {!subjectName ? (
                    <p className="mt-3 text-sm text-[color:var(--muted)]">
                      Choose a subject to reveal units and topics.
                    </p>
                  ) : !subjectDetails ? (
                    <p className="mt-3 text-sm text-[color:var(--muted)]">
                      Detailed syllabus is coming soon for {subjectName}.
                    </p>
                  ) : (
                    <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                          {subjectDetails.code}
                        </p>
                        <p className="text-lg font-semibold text-[color:var(--brand)]">
                          {subjectDetails.title}
                        </p>
                      </div>
                      {overview ? (
                        <div className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                          <p className="text-sm font-semibold text-[color:var(--brand)]">
                            Course Overview
                          </p>
                          <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
                            <table className="w-full text-left text-sm text-[color:var(--foreground)]/85">
                              <tbody>
                                {overview.courseCredit ? (
                                  <tr className="border-b border-white/10">
                                    <td className="w-1/2 px-3 py-2 font-semibold text-[color:var(--brand)]/90">
                                      Course Credit
                                    </td>
                                    <td className="px-3 py-2">
                                      {overview.courseCredit}
                                    </td>
                                  </tr>
                                ) : null}
                                {overview.hoursPerWeek ? (
                                  <tr className="border-b border-white/10">
                                    <td className="w-1/2 px-3 py-2 font-semibold text-[color:var(--brand)]/90">
                                      Hours per Week
                                    </td>
                                    <td className="px-3 py-2">
                                      {overview.hoursPerWeek}
                                    </td>
                                  </tr>
                                ) : null}
                                {overview.totalTeachingHours ? (
                                  <tr className="border-b border-white/10">
                                    <td className="w-1/2 px-3 py-2 font-semibold text-[color:var(--brand)]/90">
                                      Total Teaching Hours
                                    </td>
                                    <td className="px-3 py-2">
                                      {overview.totalTeachingHours}
                                    </td>
                                  </tr>
                                ) : null}
                                {overview.teachingPedagogy ? (
                                  <tr>
                                    <td className="w-1/2 px-3 py-2 font-semibold text-[color:var(--brand)]/90">
                                      Teaching Pedagogy
                                    </td>
                                    <td className="px-3 py-2">
                                      {overview.teachingPedagogy}
                                    </td>
                                  </tr>
                                ) : null}
                              </tbody>
                            </table>
                          </div>
                          {overview.courseOutcomes?.length ? (
                            <div className="mt-4">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                                Course Outcomes
                              </p>
                              <ul className="mt-2 space-y-2 text-[color:var(--foreground)]/85">
                                {overview.courseOutcomes.map((outcome) => (
                                  <li key={outcome}>{outcome}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="space-y-4">
                        {subjectDetails.units.map((unit) => (
                          <div
                            key={unit.title}
                            className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4"
                          >
                            <p className="text-sm font-semibold text-[color:var(--brand)]">
                              {unit.title}
                            </p>
                            <ul className="mt-2 space-y-2 text-[color:var(--foreground)]/85">
                              {unit.topics.map((topic) => (
                                <li key={topic}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {textBooks.length ? (
                        <div className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                          <p className="text-sm font-semibold text-[color:var(--brand)]">
                            Text Books
                          </p>
                          <ul className="mt-2 space-y-2 text-[color:var(--foreground)]/85">
                            {textBooks.map((book) => (
                              <li key={book}>{book}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  )}
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-[#0b0c0f] shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)]">
                  Download PDF
                </button>
                <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[color:var(--brand)]">
                  Share with class
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}


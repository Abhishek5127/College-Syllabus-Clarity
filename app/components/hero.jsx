import React from 'react'
import Link from 'next/link'

const hero = () => {
    return (
        <section className='relative overflow-hidden'>
            <div className='absolute -top-24 right-6 h-72 w-72 rounded-full bg-[color:var(--accent)]/30 blur-3xl' />
            <div className='absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[color:var(--brand)]/20 blur-3xl' />
            <div className='mx-auto max-w-6xl px-6 py-20'>
                <div className='grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
                    <div className='space-y-6'>
                        <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]'>
                            Syllabus Atlas
                        </p>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl text-[color:var(--brand)]'>
                            Semester-wise syllabi, organized by department and ready
                            for action.
                        </h1>
                        <p className='text-lg text-[color:var(--muted)]'>
                            Stop hunting across PDFs and notice boards. Find every
                            semester’s subjects, outcomes, and assessments in one
                            guided flow.
                        </p>
                        <div className='flex flex-wrap gap-3'>
                            <Link
                                href='/select-department'
                                className='rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_-24px_rgba(15,61,62,0.9)] transition hover:translate-y-[-1px]'
                            >
                                Get Syllabus
                            </Link>
                            <button className='rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[color:var(--brand)]'>
                                See How It Works
                            </button>
                        </div>
                        <div className='flex flex-wrap gap-4 text-sm text-[color:var(--muted)]'>
                            <span className='rounded-full border border-black/10 px-4 py-2'>
                                Curated by semester
                            </span>
                            <span className='rounded-full border border-black/10 px-4 py-2'>
                                Department-first
                            </span>
                            <span className='rounded-full border border-black/10 px-4 py-2'>
                                Exam-ready flow
                            </span>
                        </div>
                    </div>
                    <div className='rounded-3xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-[0_28px_60px_-36px_rgba(15,61,62,0.7)]'>
                        <div className='space-y-5'>
                            <div className='rounded-2xl bg-gray-600 px-4 py-4'>
                                <p className='text-sm font-semibold text-[color:var(--brand)]'>
                                    Step 1
                                </p>
                                <p className='text-lg font-semibold'>Pick your department</p>
                                <p className='text-sm text-[color:var(--muted)]'>
                                    Choose your course to filter relevant semesters.
                                </p>
                            </div>
                            <div className='rounded-2xl bg-gray-600 px-4 py-4'>
                                <p className='text-sm font-semibold text-[color:var(--brand)]'>
                                    Step 2
                                </p>
                                <p className='text-lg font-semibold'>Select the semester</p>
                                <p className='text-sm text-[color:var(--muted)]'>
                                    See subjects, outcomes, and assessments instantly.
                                </p>
                            </div>
                            <div className='rounded-2xl bg-gray-600 px-4 py-4'>
                                <p className='text-sm font-semibold text-[color:var(--brand)]'>
                                    Step 3
                                </p>
                                <p className='text-lg font-semibold'>Plan your weeks</p>
                                <p className='text-sm text-[color:var(--muted)]'>
                                    Use the syllabus to map study blocks and prep.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero

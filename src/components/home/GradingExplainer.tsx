import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { grades } from "@/lib/data";

const checks = [
  "Battery health 85%+ guaranteed",
  "Genuine parts only",
  "Wiped & data-secure",
  "Sanitised & repackaged",
];

export default function GradingExplainer() {
  return (
    <section className="mx-auto max-w-7xl container-px py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Refurbished, done right
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Every device graded with total transparency
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            We never hide behind vague descriptions. Each gadget passes a 90-point
            inspection and is honestly graded so you know exactly what you&apos;re
            getting — and exactly how much you&apos;re saving.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checks.map((check) => (
              <li key={check} className="flex items-center gap-2.5 text-sm text-ink-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                {check}
              </li>
            ))}
          </ul>

          <Link
            href="/refurbished"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            How our process works
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {grades.map((grade) => (
            <div
              key={grade.title}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-ink-200 hover:shadow-md"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl text-lg font-extrabold ${grade.tone}`}
              >
                {grade.label}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink-900">
                {grade.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {grade.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

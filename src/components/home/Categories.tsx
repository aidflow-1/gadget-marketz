import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl container-px py-16 lg:py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Browse by category
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Find your next gadget
          </h2>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          View all categories
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-4 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
          >
            <div
              className={`relative mb-3 aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${cat.accent}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-bold text-ink-900">{cat.name}</h3>
            <p className="mt-0.5 text-xs text-ink-400">{cat.count}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

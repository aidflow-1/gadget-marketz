import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Zap } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-32 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-ink-100 backdrop-blur">
              <span className="flex items-center gap-1 text-accent-400">
                <Star className="h-3.5 w-3.5 fill-accent-400" />
                4.8/5
              </span>
              Rated Excellent by 14,000+ UK customers
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Premium tech,
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                without the premium
              </span>{" "}
              price.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-300">
              Certified refurbished and brand-new phones, laptops and gadgets —
              rigorously tested, warranty-backed, and delivered next day right
              across the UK.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-base font-bold text-ink-900 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
              >
                Shop all gadgets
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/trade-in"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Trade in your old device
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent-400" />
                12-month warranty
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent-400" />
                Free next-day delivery
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80"
                alt="Refurbished smartphone held in hand"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>

            {/* Floating price card */}
            <div className="absolute -left-4 bottom-10 hidden w-52 rounded-2xl border border-ink-100 bg-white p-4 text-ink-900 shadow-xl sm:block">
              <p className="text-xs font-medium text-ink-400">iPhone 14 Pro</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-extrabold">£619</span>
                <span className="mb-1 text-sm text-ink-400 line-through">
                  £1099
                </span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                Save 44% · Grade A
              </span>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur md:flex">
              <ShieldCheck className="h-6 w-6 text-accent-400" />
              <div className="text-sm leading-tight">
                <p className="font-bold text-white">90-point</p>
                <p className="text-ink-300">quality check</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 text-center">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-ink-300 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="h-12" />
      </div>
    </section>
  );
}

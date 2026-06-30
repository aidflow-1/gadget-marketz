import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, PoundSterling, Recycle } from "lucide-react";

const steps = [
  { icon: Smartphone, text: "Tell us your device" },
  { icon: PoundSterling, text: "Get an instant quote" },
  { icon: Recycle, text: "Post it free & get paid" },
];

export default function TradeInBanner() {
  return (
    <section className="mx-auto max-w-7xl container-px py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-4xl bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />

        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3.5 py-1.5 text-xs font-semibold text-accent-400">
              Trade-In Programme
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Turn your old gadget into{" "}
              <span className="text-accent-400">instant cash</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-300">
              Got a drawer full of old tech? Trade it in for cash or credit
              towards your next upgrade. Free postage, fair prices, paid within
              48 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              {steps.map(({ icon: Icon, text }, i) => (
                <div key={text} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-accent-400">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium text-ink-200">
                    <span className="mr-1 text-ink-500">{i + 1}.</span>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/trade-in"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-base font-bold text-ink-900 transition hover:bg-accent-400"
            >
              Get my instant quote
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 lg:block">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
              alt="Person holding several smartphones to trade in"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

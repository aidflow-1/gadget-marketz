import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl container-px pb-16 lg:pb-20">
      <div className="overflow-hidden rounded-4xl bg-brand-600 px-6 py-12 text-white sm:px-12 lg:py-16">
        <div className="mx-auto grid max-w-4xl items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold">
              <Mail className="h-4 w-4" />
              Join the Marketz list
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Get £10 off your first order
            </h2>
            <p className="mt-2 text-brand-100">
              Be first to hear about flash deals, new stock and exclusive member
              prices. No spam — unsubscribe anytime.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.co.uk"
              className="h-12 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-brand-200 outline-none transition focus:border-white focus:bg-white/15 focus:ring-4 focus:ring-white/20"
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-accent-500 px-6 text-sm font-bold text-ink-900 transition hover:bg-accent-400"
            >
              Sign me up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

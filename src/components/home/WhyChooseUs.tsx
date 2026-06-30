import { Truck, ShieldCheck, RefreshCw, Leaf, BadgePoundSterling, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free next-day UK delivery",
    body: "Order before 8pm and get it tomorrow — fully tracked, on us, for orders over £30.",
  },
  {
    icon: ShieldCheck,
    title: "12-month warranty included",
    body: "Every gadget, new or refurbished, is covered for a full year as standard.",
  },
  {
    icon: RefreshCw,
    title: "30-day no-quibble returns",
    body: "Changed your mind? Send it back within 30 days for a full, hassle-free refund.",
  },
  {
    icon: BadgePoundSterling,
    title: "Up to 50% off RRP",
    body: "Certified tech at honest prices — the same gadgets, just a whole lot cheaper.",
  },
  {
    icon: Leaf,
    title: "Better for the planet",
    body: "Buying refurbished keeps e-waste out of landfill and cuts carbon — tech with a conscience.",
  },
  {
    icon: Headphones,
    title: "Real UK-based support",
    body: "Friendly humans in our London HQ, ready to help 8am–8pm, seven days a week.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Why Gadget Marketz
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Tech you can trust, service you&apos;ll love
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Thousands of UK shoppers choose us for one simple reason — we make
            buying gadgets affordable, reliable and genuinely refreshing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

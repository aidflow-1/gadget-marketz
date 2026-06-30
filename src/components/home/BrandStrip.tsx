import { brands } from "@/lib/data";

export default function BrandStrip() {
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-ink-100 bg-white py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-400">
        Stocking the brands you love
      </p>
      <div className="marquee-pause relative mt-6 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
        <ul className="animate-marquee flex w-max items-center gap-12">
          {loop.map((brand, i) => (
            <li
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-xl font-extrabold tracking-tight text-ink-300 transition hover:text-ink-700"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

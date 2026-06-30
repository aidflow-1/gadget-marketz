import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl container-px py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Loved by customers across the UK
        </h2>
        <p className="mt-3 text-lg text-ink-500">
          Rated <span className="font-semibold text-ink-900">4.8 out of 5</span>{" "}
          from over 14,000 verified reviews.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
          >
            <Quote className="h-8 w-8 text-brand-100" />
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-400">{t.location} · Verified buyer</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import ProductCard from "@/components/site/ProductCard";

const tabs = ["Trending now", "Just landed", "Best deals"];

export default function FeaturedProducts() {
  return (
    <section className="bg-ink-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
              Handpicked for you
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              This week&apos;s top gadgets
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  i === 0
                    ? "bg-ink-900 text-white"
                    : "border border-ink-200 bg-white text-ink-600 hover:border-ink-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-brand-300 hover:text-brand-700"
          >
            Explore all 1,400+ products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

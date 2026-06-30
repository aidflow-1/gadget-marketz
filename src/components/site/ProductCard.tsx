import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";
import { formatGBP, type Product } from "@/lib/data";

const gradeStyles: Record<Product["grade"], string> = {
  "Brand New": "bg-accent-500 text-ink-900",
  "Grade A": "bg-emerald-100 text-emerald-700",
  "Grade B": "bg-brand-100 text-brand-700",
  "Grade C": "bg-amber-100 text-amber-700",
};

export default function ProductCard({ product }: { product: Product }) {
  const saving =
    product.rrp && product.rrp > product.price
      ? Math.round(((product.rrp - product.price) / product.rrp) * 100)
      : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/5">
      <div className="relative aspect-square overflow-hidden bg-ink-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
          {saving > 0 && (
            <span className="rounded-full bg-rose-500 px-2.5 py-1 text-[11px] font-bold text-white">
              -{saving}%
            </span>
          )}
        </div>

        <button
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink-500 opacity-0 shadow-sm backdrop-blur transition hover:text-rose-500 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4.5 w-4.5" />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-white/60 backdrop-blur-[1px]">
            <span className="rounded-full bg-ink-900 px-4 py-1.5 text-xs font-semibold text-white">
              Notify me when back
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-400">
            {product.brand}
          </span>
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${gradeStyles[product.grade]}`}
          >
            {product.grade}
          </span>
        </div>

        <Link href={`/product/${product.id}`} className="mt-1.5">
          <h3 className="text-sm font-semibold leading-snug text-ink-900 group-hover:text-brand-700">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-500">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-ink-700">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-end gap-2">
            <span className="text-xl font-extrabold text-ink-900">
              {formatGBP(product.price)}
            </span>
            {product.rrp && (
              <span className="mb-0.5 text-sm text-ink-400 line-through">
                {formatGBP(product.rrp)}
              </span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className="mt-3 w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400"
          >
            {product.inStock ? "Add to basket" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rrp?: number;
  rating: number;
  reviews: number;
  grade: "Brand New" | "Grade A" | "Grade B" | "Grade C";
  image: string;
  badge?: string;
  inStock: boolean;
};

export type Category = {
  name: string;
  href: string;
  count: string;
  image: string;
  accent: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const categories: Category[] = [
  {
    name: "Smartphones",
    href: "/shop/smartphones",
    count: "420+ models",
    image: img("photo-1511707171634-5f897ff02aa9"),
    accent: "from-brand-500/20 to-brand-700/5",
  },
  {
    name: "Laptops",
    href: "/shop/laptops",
    count: "260+ models",
    image: img("photo-1496181133206-80ce9b88a853"),
    accent: "from-violet-500/20 to-violet-700/5",
  },
  {
    name: "Tablets",
    href: "/shop/tablets",
    count: "140+ models",
    image: img("photo-1561154464-82e9adf32764"),
    accent: "from-cyan-500/20 to-cyan-700/5",
  },
  {
    name: "Audio",
    href: "/shop/audio",
    count: "310+ models",
    image: img("photo-1505740420928-5e560c06d30e"),
    accent: "from-rose-500/20 to-rose-700/5",
  },
  {
    name: "Gaming",
    href: "/shop/gaming",
    count: "180+ models",
    image: img("photo-1606144042614-b2417e99c4e3"),
    accent: "from-emerald-500/20 to-emerald-700/5",
  },
  {
    name: "Smartwatches",
    href: "/shop/smartwatches",
    count: "95+ models",
    image: img("photo-1579586337278-3befd40fd17a"),
    accent: "from-amber-500/20 to-amber-700/5",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro 256GB",
    category: "Smartphones",
    brand: "Apple",
    price: 619,
    rrp: 1099,
    rating: 4.9,
    reviews: 312,
    grade: "Grade A",
    image: img("photo-1678652197831-2d180705cd2c"),
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "macbook-air-m2",
    name: "MacBook Air M2 13\"",
    category: "Laptops",
    brand: "Apple",
    price: 749,
    rrp: 1149,
    rating: 4.8,
    reviews: 187,
    grade: "Grade A",
    image: img("photo-1517336714731-489689fd1ca8"),
    badge: "Deal",
    inStock: true,
  },
  {
    id: "galaxy-s23",
    name: "Samsung Galaxy S23 128GB",
    category: "Smartphones",
    brand: "Samsung",
    price: 429,
    rrp: 849,
    rating: 4.7,
    reviews: 142,
    grade: "Grade B",
    image: img("photo-1610945265064-0e34e5519bbf"),
    inStock: true,
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Headphones",
    category: "Audio",
    brand: "Sony",
    price: 219,
    rrp: 379,
    rating: 4.9,
    reviews: 268,
    grade: "Brand New",
    image: img("photo-1618366712010-f4ae9c647dcb"),
    badge: "New In",
    inStock: true,
  },
  {
    id: "ipad-air-5",
    name: "iPad Air (5th Gen) 64GB",
    category: "Tablets",
    brand: "Apple",
    price: 389,
    rrp: 669,
    rating: 4.8,
    reviews: 96,
    grade: "Grade A",
    image: img("photo-1544244015-0df4b3ffc6b0"),
    inStock: true,
  },
  {
    id: "ps5-slim",
    name: "PlayStation 5 Slim Console",
    category: "Gaming",
    brand: "Sony",
    price: 399,
    rrp: 479,
    rating: 4.9,
    reviews: 421,
    grade: "Brand New",
    image: img("photo-1606813907291-d86efa9b94db"),
    badge: "Hot",
    inStock: true,
  },
  {
    id: "galaxy-watch6",
    name: "Galaxy Watch6 Classic",
    category: "Smartwatches",
    brand: "Samsung",
    price: 189,
    rrp: 369,
    rating: 4.6,
    reviews: 73,
    grade: "Grade A",
    image: img("photo-1617043786394-f977fa12eddf"),
    inStock: true,
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13 (i7, 16GB)",
    category: "Laptops",
    brand: "Dell",
    price: 549,
    rrp: 1299,
    rating: 4.7,
    reviews: 58,
    grade: "Grade B",
    image: img("photo-1593642702821-c8da6771f0c6"),
    inStock: false,
  },
];

export const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Google",
  "Microsoft",
  "Dell",
  "Bose",
  "Nintendo",
  "Lenovo",
  "OnePlus",
];

export type Grade = {
  label: string;
  title: string;
  description: string;
  tone: string;
};

export const grades: Grade[] = [
  {
    label: "New",
    title: "Brand New",
    description:
      "Sealed, factory-fresh stock with full manufacturer warranty. Exactly what you'd find on the high street — for less.",
    tone: "bg-accent-500 text-ink-900",
  },
  {
    label: "A",
    title: "Grade A — Pristine",
    description:
      "Practically flawless. No visible marks, fully tested, and indistinguishable from new in everyday use.",
    tone: "bg-emerald-500 text-white",
  },
  {
    label: "B",
    title: "Grade B — Good",
    description:
      "Light signs of previous use such as faint micro-scratches, only visible up close. Performs like new.",
    tone: "bg-brand-500 text-white",
  },
  {
    label: "C",
    title: "Grade C — Fair",
    description:
      "More noticeable cosmetic wear but fully functional and rigorously tested. The smartest way to save.",
    tone: "bg-amber-500 text-ink-900",
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const testimonials = [
  {
    name: "Olivia Bennett",
    location: "Manchester",
    rating: 5,
    quote:
      "Ordered a refurbished iPhone 14 Pro and honestly couldn't tell it from new. Arrived next morning, beautifully packaged. Saved nearly £400.",
    avatar: img("photo-1494790108377-be9c29b29330"),
  },
  {
    name: "James Okafor",
    location: "London",
    rating: 5,
    quote:
      "The 12-month warranty gave me the confidence to buy a Grade B MacBook Air. Works perfectly and the price was unbeatable.",
    avatar: img("photo-1500648767791-00dcc994a43e"),
  },
  {
    name: "Sophie Walsh",
    location: "Glasgow",
    rating: 5,
    quote:
      "Brilliant customer service — they helped me trade in my old Galaxy and the credit came off instantly. Will defo shop here again.",
    avatar: img("photo-1438761681033-6461ffad8d80"),
  },
];

export const stats = [
  { value: "250k+", label: "Gadgets sold" },
  { value: "4.8/5", label: "Trustpilot rating" },
  { value: "12mo", label: "Warranty as standard" },
  { value: "98%", label: "Next-day deliveries" },
];

export const navLinks = [
  { label: "Smartphones", href: "/shop/smartphones" },
  { label: "Laptops", href: "/shop/laptops" },
  { label: "Tablets", href: "/shop/tablets" },
  { label: "Audio", href: "/shop/audio" },
  { label: "Gaming", href: "/shop/gaming" },
  { label: "Trade-In", href: "/trade-in" },
];

export function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

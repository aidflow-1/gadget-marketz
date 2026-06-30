"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex h-16 items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Logo priority className="h-9 w-auto sm:h-10" />

          {/* Search */}
          <div className="relative ml-2 hidden flex-1 md:block">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              placeholder="Search iPhone, MacBook, PS5…"
              className="h-11 w-full rounded-full border border-ink-200 bg-ink-50/60 pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1">
            <button
              className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-50 md:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="hidden h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-50 sm:grid"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
            <Link
              href="/account"
              className="hidden h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-ink-700 hover:bg-ink-50 lg:flex"
            >
              <User className="h-5 w-5" />
              Account
            </Link>
            <Link
              href="/cart"
              className="relative flex h-10 items-center gap-2 rounded-lg bg-ink-900 px-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              <ShoppingCart className="h-4.5 w-4.5" />
              <span className="hidden sm:inline">Basket</span>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent-500 px-1 text-[11px] font-bold text-ink-900">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden h-12 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
          <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open now · UK support 8am–8pm
          </span>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-50"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative mt-5">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                placeholder="Search gadgets…"
                className="h-11 w-full rounded-full border border-ink-200 bg-ink-50/60 pl-11 pr-4 text-sm outline-none focus:border-brand-400 focus:bg-white"
              />
            </div>
            <nav className="mt-5 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/account"
              className="mt-4 flex items-center gap-2 rounded-lg border border-ink-200 px-3 py-3 text-sm font-medium text-ink-800"
            >
              <User className="h-5 w-5" /> My Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

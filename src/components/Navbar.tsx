"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Franchising", href: "/franchising" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
      <div className="bg-brand-navy h-8" />

      <nav className="container-page flex items-center justify-between py-4 mx-auto">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/home/afc-logo.svg"
            alt="Americas Food Court"
            width={62}
            height={42}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-2xl bg-white/50 px-4 py-3 backdrop-blur-md lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-navy rounded-xl px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/menu"
          className="bg-brand-red hidden rounded-2xl px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90 lg:inline-flex"
        >
          Explore Menu
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/50 backdrop-blur-md lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`bg-brand-navy absolute inset-x-0 top-0 h-0.5 rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`bg-brand-navy absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`bg-brand-navy absolute inset-x-0 bottom-0 h-0.5 rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-6 overflow-hidden rounded-2xl bg-white/95 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-navy flex items-center rounded-xl px-4 py-3 text-sm font-semibold hover:bg-brand-navy/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                onClick={() => setOpen(false)}
                className="bg-brand-red mt-2 flex items-center justify-center rounded-2xl px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

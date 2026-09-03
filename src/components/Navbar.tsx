"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Order Food", href: "/food-menu" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Partner with us", href: "/franchising" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  console.log(pathname);
  return (
    <header className="inset-x-0 top-0 z-50 bg-white ">
      <nav className="container-page mx-auto flex items-center justify-between gap-4 py-4 sm:py-5">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src="/images/home/afc-logo.svg"
            alt="Americas Food Court"
            width={110}
            height={78}
            priority
            className="h-14 w-auto sm:h-16 lg:h-19.5"
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-brand-navy  px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive ? "border-b-2 border-brand-red" : "hover:bg-brand-navy/5 rounded-xl"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/cart"
          className="bg-brand-red hidden shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90 xl:inline-flex"
        >
          <FiShoppingCart className="h-4 w-4" aria-hidden="true" />
          View Cart
          <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-brand-navy relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="container-page mx-auto xl:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
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
                href="/cart"
                onClick={() => setOpen(false)}
                className="bg-brand-red mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                <FiShoppingCart className="h-4 w-4" aria-hidden="true" />
                View Cart
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

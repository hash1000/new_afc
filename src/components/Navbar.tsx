"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { CART_UPDATED_EVENT, readCart } from "@/lib/cart";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Order Food", href: "/food-menu" },
  { label: "Locations", href: "/locations" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Partner with us", href: "/franchising" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const syncCartCount = () =>
      setCartCount(readCart().reduce((total, item) => total + item.quantity, 0));
    syncCartCount();
    window.addEventListener(CART_UPDATED_EVENT, syncCartCount);
    window.addEventListener("storage", syncCartCount);
    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncCartCount);
      window.removeEventListener("storage", syncCartCount);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="inset-x-0 top-0 z-50 bg-white">
      <nav className="container-page mx-auto flex min-h-20 items-center justify-between gap-3 py-3 sm:min-h-24 sm:py-4">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src="/images/home/afc-logo.svg"
            alt="Americas Food Court"
            width={110}
            height={78}
            priority
            className="h-12 w-auto sm:h-16 lg:h-19.5"
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
          aria-label={cartCount > 0 ? `${cartCount} ${cartCount === 1 ? "item" : "items"} in cart` : "View Cart"}
          className="group relative hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-colors hover:bg-brand-red/90 xl:inline-flex"
        >
          <FiShoppingCart className="h-4 w-4" aria-hidden="true" />
          {cartCount > 0 && <span aria-hidden="true" className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-yellow px-1 text-[10px] font-extrabold text-brand-navy">{cartCount}</span>}
          <span role="tooltip" className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-md bg-brand-navy px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">{cartCount > 0 ? `${cartCount} ${cartCount === 1 ? "item" : "items"} in cart` : "View Cart"}</span>
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
                aria-label={cartCount > 0 ? `${cartCount} ${cartCount === 1 ? "item" : "items"} in cart` : "View Cart"}
                className="bg-brand-red relative mt-2 flex h-11 w-11 items-center justify-center self-center rounded-full text-white"
              >
                <FiShoppingCart className="h-4 w-4" aria-hidden="true" />
                {cartCount > 0 && <span aria-hidden="true" className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-yellow px-1 text-[10px] font-extrabold text-brand-navy">{cartCount}</span>}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Online Ordering Coming Soon — Americas Food Court",
  description:
    "Online ordering at Americas Food Court is coming soon. Explore our menu and find a location near you while we get ready.",
};

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center bg-cream px-4 py-16 sm:px-8 sm:py-24">
        <section className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-brand-navy/10 bg-white px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-yellow/20" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-brand-red/5" />
          <div className="relative flex flex-col items-center">
            <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-yellow text-brand-navy sm:h-24 sm:w-24">
              <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red sm:text-sm">
              Online ordering
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-tight text-brand-navy sm:text-7xl">
              Coming <span className="text-brand-red">Soon!</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-navy/70 sm:text-lg">
              Your favorites are almost a click away. We’re getting online ordering
              ready — check back soon to satisfy your cravings.
            </p>
            <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link href="/food-menu" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">
                Explore Our Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/locations" className="inline-flex items-center justify-center rounded-2xl border border-brand-navy px-7 py-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy">
                Find a Location
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

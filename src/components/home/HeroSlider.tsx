"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ZigzagDivider from "./ZigzagDivider";
import BrandCarousel from "./BrandCarousel";

const SLIDES = [
  {
    bg: "/images/hero/slide-1-bg.jpg",
    bgMobile: "/images/hero/slide-1-bg-mobile.jpg",
    alt: "Burgers, hot dog, milkshake and pizza slice from Americas Food Court brands on a warm restaurant table",
  },
  {
    bg: "/images/hero/slide-2-bg.jpg",
    bgMobile: "/images/hero/slide-2-bg-mobile.jpg",
    alt: "Assorted specialty pizzas from Americas Food Court brands",
  },
  {
    bg: "/images/hero/slide-3-bg.jpg",
    bgMobile: "/images/hero/slide-3-bg-mobile.jpg",
    alt: "Strawberry cheesecake slice from Americas Food Court brands",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () =>
    setCurrent((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-40 pb-16 sm:pt-44">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={SLIDES[current].bgMobile}
              alt={SLIDES[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-top sm:hidden"
            />
            <Image
              src={SLIDES[current].bg}
              alt={SLIDES[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="hidden object-cover object-[45%_center] sm:block lg:object-[65%_center]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/5 to-transparent sm:hidden" />

      <div className="container-page relative mx-auto flex flex-1 items-center">
        <div className="max-w-[610px]">
          <h1 className="font-display text-[13vw] leading-[0.95] uppercase sm:text-[64px] sm:leading-[0.95] lg:text-[80px]">
            <span className="text-brand-navy block">One Stop.</span>
            <span className="text-brand-navy block">Everything</span>
            <span className="text-brand-red block">You Crave.</span>
          </h1>

          <div className="mt-6">
            <ZigzagDivider />
          </div>

          <p className="font-display text-brand-navy mt-5 max-w-md text-xl leading-tight uppercase sm:text-2xl">
            All the foods you love, in one place
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-brand-red inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="4" rx="1" fill="currentColor" />
                <rect x="3" y="10" width="18" height="4" rx="1" fill="currentColor" />
                <rect x="3" y="16" width="18" height="4" rx="1" fill="currentColor" />
              </svg>
              Explore Menu
            </Link>
            <Link
              href="/order"
              className="text-brand-red inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-white/30 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" />
              </svg>
              Order Now
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="border-brand-navy text-brand-navy absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border bg-white/70 backdrop-blur-sm transition-colors hover:bg-white sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="border-brand-navy text-brand-navy absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border bg-white/70 backdrop-blur-sm transition-colors hover:bg-white sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-red w-6" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 mt-auto pt-16">
        <BrandCarousel />
      </div>
    </section>
  );
}

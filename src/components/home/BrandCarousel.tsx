"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BRANDS = [
  { name: "MrBeast Burger", src: "/images/home/logo-mrbeast.webp", w: 250, h: 250 },
  { name: "One More Slice", src: "/images/home/logo-oneslice.webp", w: 250, h: 250 },
  { name: "Sweet Waves Kitchen", src: "/images/home/logo-sweetwaves.webp", w: 250, h: 250 },
  { name: "California Pizza Kitchen", src: "/images/home/logo-cpk.webp", w: 250, h: 250 },
  { name: "The Cheesecake Factory Bakery", src: "/images/home/logo-cheesecake.webp", w: 250, h: 250 },
  { name: "Chickaroo Chicken", src: "/images/home/logo-chickaroo.webp", w: 250, h: 250 },
  { name: "Chick Chick Eat", src: "/images/home/logo-chickchickeat.webp", w: 250, h: 250 },
  { name: "Dog It Up", src: "/images/home/logo-dogitup.webp", w: 250, h: 250 },
  { name: "Empanadas United", src: "/images/home/logo-empanadas.webp", w: 250, h: 250 },
  { name: "Man vs Fries", src: "/images/home/logo-manvsfries.webp", w: 250, h: 250 },
  { name: "Nathan's Famous", src: "/images/home/logo-nathans.webp", w: 250, h: 250 },
  { name: "Philly's Best", src: "/images/home/logo-phillysbest.webp", w: 250, h: 250 },
];

const MOBILE_VISIBLE = 2;
const TABLET_VISIBLE = 3;
const DESKTOP_VISIBLE = 5;
const AUTO_SCROLL_MS = 3000;

export default function BrandCarousel() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(MOBILE_VISIBLE);

  useEffect(() => {
    const tabletMq = window.matchMedia("(min-width: 640px)");
    const desktopMq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setVisible(desktopMq.matches ? DESKTOP_VISIBLE : tabletMq.matches ? TABLET_VISIBLE : MOBILE_VISIBLE);
    };
    update();
    tabletMq.addEventListener("change", update);
    desktopMq.addEventListener("change", update);
    return () => {
      tabletMq.removeEventListener("change", update);
      desktopMq.removeEventListener("change", update);
    };
  }, []);

  const next = () => setOffset((prev) => (prev + 1) % BRANDS.length);
  const prev = () => setOffset((p) => (p - 1 + BRANDS.length) % BRANDS.length);

  useEffect(() => {
    const timer = setInterval(next, AUTO_SCROLL_MS);
    return () => clearInterval(timer);
  }, []);

  const loopedBrands = [...BRANDS, ...BRANDS];
  const itemWidthPercent = 100 / visible;

  return (
    <section className="container-page relative z-10 mx-auto w-full overflow-hidden rounded-3xl bg-cream">
      <div className="flex items-center gap-2 rounded-3xl px-2 py-2 sm:gap-4 sm:px-4 sm:py-2.5 lg:gap-6 lg:px-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous brands"
            className="border-brand-navy text-brand-navy hover:bg-brand-navy flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors hover:text-white sm:h-10 sm:w-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset * itemWidthPercent}%)` }}
          >
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex h-16 shrink-0 items-center justify-center px-1 sm:h-20 sm:px-2 lg:h-24 lg:px-3"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.w}
                  height={brand.h}
                  className="h-14 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-[4.5rem] lg:h-[5.5rem]"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next brands"
          className="border-brand-navy text-brand-navy hover:bg-brand-navy flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors hover:text-white sm:h-10 sm:w-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

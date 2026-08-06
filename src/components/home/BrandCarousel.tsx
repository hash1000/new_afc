"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BRANDS = [
  { name: "MrBeast Burger", src: "/images/home/logo-mrbeast.png", w: 174, h: 174 },
  { name: "One More Slice", src: "/images/home/logo-oneslice.png", w: 166, h: 166 },
  { name: "Sweet Waves Kitchen", src: "/images/home/logo-sweetwaves.png", w: 184, h: 184 },
  { name: "California Pizza Kitchen", src: "/images/home/logo-cpk.png", w: 228, h: 80 },
  { name: "The Cheesecake Factory Bakery", src: "/images/home/logo-cheesecake.png", w: 182, h: 110 },
  { name: "Chickaroo Chicken", src: "/images/home/logo-chickaroo.png", w: 250, h: 78 },
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
    <section className="container-page relative z-10 mx-auto -mt-[38px]">
      <div className="bg-cream flex items-center gap-4 rounded-[36px] px-4 py-6 sm:gap-6 sm:px-8">
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
                className="flex shrink-0 items-center justify-center px-3"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.w}
                  height={brand.h}
                  className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 sm:h-10 lg:h-14"
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

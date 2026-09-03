"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { categories } from "@/lib/brands";

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="container-page mx-auto flex items-center gap-1 sm:gap-2">
      <button
        type="button"
        onClick={() => scrollBy(-240)}
        aria-label="Scroll categories left"
        disabled={!canScrollLeft}
        className={`text-brand-navy hidden h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-60 disabled:pointer-events-none disabled:opacity-0 sm:flex ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="relative min-w-0 flex-1">
        <div
          ref={scrollerRef}
          className="scrollbar-none flex gap-2 overflow-x-auto scroll-smooth sm:gap-3"
        >
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                aria-pressed={isActive}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`relative hover:cursor-pointer flex shrink-0 items-center gap-1.5 rounded-xl bg-[#efefef] py-2 pr-3 pl-2.5 text-xs whitespace-nowrap text-black sm:gap-2 sm:py-2.5 sm:pr-4 sm:pl-3 sm:text-sm ${
                  isActive
                    ? "border-brand-red border"
                    : "border border-transparent"
                }`}
              >
                <span aria-hidden="true">{category.emoji}</span>
                <span>{category.label}</span>
                {isActive && (
                  <motion.svg
                    layoutId="category-check"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M7 12.5l3 3 7-7"
                      stroke="#d02729"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </motion.button>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 left-0 h-full w-6 bg-linear-to-r from-white to-transparent transition-opacity duration-200 sm:w-10 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 right-0 h-full w-6 bg-linear-to-l from-white to-transparent transition-opacity duration-200 sm:w-10 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <button
        type="button"
        onClick={() => scrollBy(240)}
        aria-label="Scroll categories right"
        disabled={!canScrollRight}
        className={`text-brand-navy hidden h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-60 disabled:pointer-events-none disabled:opacity-0 sm:flex ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function MenuHero({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-40 pb-12 sm:min-h-[480px] sm:pt-44">
      <Image
        src="/images/menu/hero-food-mobile.jpg"
        alt="Burgers, hot dog and milkshake from Americas Food Court brands"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top sm:hidden"
      />
      <Image
        src="/images/menu/hero-food.jpg"
        alt="Burgers, hot dog and milkshake from Americas Food Court brands"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[75%_center] sm:block lg:object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent sm:hidden" />

      <div className="container-page relative">
        <div className="max-w-[660px]">
          <h1 className="font-display text-[12vw] leading-[0.95] text-white uppercase sm:text-6xl">
            What are you
          </h1>
          <h2 className="font-display text-brand-yellow mt-1 text-[7vw] leading-[0.95] tracking-wide uppercase sm:text-4xl">
            in mood for today ?
          </h2>
          <svg
            viewBox="0 0 447 38"
            className="text-brand-yellow mt-3 h-4 w-56 sm:w-72"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 30C60 -4 120 34 180 12S320 -4 445 20"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <p className="font-display mt-6 text-lg text-white sm:text-xl">
            Your Favorites, Delivered Fast
          </p>

          <div className="relative mt-4 max-w-xl">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Type to search your food here i.e. Burger, Pizza, Hot Dogs etc..."
              className="text-brand-navy h-14 w-full rounded-full bg-white pr-16 pl-6 text-sm placeholder:text-black/50 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="bg-brand-red absolute top-1/2 right-1.5 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-brand-red/90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

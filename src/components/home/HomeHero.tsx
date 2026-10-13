"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BACKGROUNDS = [
  "/images/home/hero-image-1.png",
  "/images/home/hero-image-2.jpg",
  "/images/home/hero-image-3.jpg",
  "/images/home/hero-image-4.jpg",
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % BACKGROUNDS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="home-heading" className="home-hero relative isolate flex items-center overflow-hidden bg-[#81522f]">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {BACKGROUNDS.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            className={`hero-background object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="hero-content mx-auto w-full max-w-[1440px]  pt-32 pb-16 px-[2%] sm:px-[4%] lg:pt-40">
        <h1 id="home-heading" className="font-display text-[clamp(2.75rem,5.4vw,6rem)] leading-[1.04] tracking-[-0.025em] text-white uppercase">
          One stop.<br />Everything<br />You crave.
        </h1>
        <div className="mt-8 flex sm:mt-10">
          <Link href="/food-menu" className="inline-flex min-h-14 min-w-44 items-center justify-center rounded-xl bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-red/90">Explore Menu</Link>
        </div>
      </div>

    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BACKGROUNDS = [
  "/images/home/hero-image-9.png",
  "/images/home/hero-image-10.png",
  "/images/home/hero-image-1.png",
  "/images/home/hero-image-2.png",
  "/images/home/hero-image-3.png",
  "/images/home/hero-image-4.png",
  "/images/home/hero-image-5.png",
  "/images/home/hero-image-6.png",
  "/images/home/hero-image-7.png",
  "/images/home/hero-image-8.png",
];

export default function HomeHero() {
  const [{ currentSlide, requestedSlides }, setSlides] = useState({
    currentSlide: 0,
    requestedSlides: [0, 1],
  });
  const readySlides = useRef(new Set<number>());
  const failedSlides = useRef(new Set<number>());

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) return;

      setSlides((state) => {
        // Keep the visible image until an upcoming slide has finished decoding.
        let next = (state.currentSlide + 1) % BACKGROUNDS.length;
        while (failedSlides.current.has(next) && next !== state.currentSlide) {
          next = (next + 1) % BACKGROUNDS.length;
        }
        if (next === state.currentSlide) return state;

        const isReady = readySlides.current.has(next);
        const upcoming = isReady ? (next + 1) % BACKGROUNDS.length : next;
        const needsRequest = !state.requestedSlides.includes(upcoming);
        if (!isReady && !needsRequest) return state;

        return {
          currentSlide: isReady ? next : state.currentSlide,
          requestedSlides: needsRequest
            ? [...state.requestedSlides, upcoming]
            : state.requestedSlides,
        };
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="home-heading" className="home-hero relative isolate flex items-center overflow-hidden bg-[#81522f]">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {requestedSlides.map((index) => (
          <Image
            key={BACKGROUNDS[index]}
            src={BACKGROUNDS[index]}
            alt=""
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            onLoad={async (event) => {
              const image = event.currentTarget;
              try {
                await image.decode();
                readySlides.current.add(index);
              } catch {
                failedSlides.current.add(index);
              }
            }}
            onError={() => failedSlides.current.add(index)}
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

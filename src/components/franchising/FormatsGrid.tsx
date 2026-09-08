"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FORMATS = [
  { label: "Drive-Thru", src: "/images/franchising/storefront-airport-terminal.png" },
  { label: "Traditional Restaurants", src: "/images/franchising/storefront-dining-room-night.png" },
  { label: "Travels Plazas", src: "/images/franchising/storefront-drive-thru-menu.png" },
  { label: "Convenience Stores", src: "/images/franchising/storefront-exterior-night-01.png" },
  { label: "Retails", src: "/images/franchising/storefront-exterior-night-02.png" },
  { label: "Malls", src: "/images/franchising/storefront-kiosk-mall.png" },
  { label: "Airports", src: "/images/franchising/storefront-mall-entrance.png" },
  { label: "Kiosks", src: "/images/franchising/storefront-travel-plaza.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FormatsGrid() {
  return (
    <section id="formats" className="container-page mx-auto py-12 lg:py-20">
      <h2 className="text-brand-navy text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        Multiple Format, Multiple Brands. Endless Possibilites
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-black/70 sm:text-base">
        Consumers expect convenience, speed, and choice. America&apos;s Food
        Court reaches customers across every major dining touchpoint through a
        portfolio of flexible store formats.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {FORMATS.map((format, index) => (
          <motion.div
            key={format.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.08 }}
            className="border-brand-navy/50 bg-cream overflow-hidden rounded-2xl border"
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={format.src}
                alt={format.label}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <h3 className="font-display text-brand-red text-base sm:text-lg">{format.label}</h3>
              <a href="#" className="text-brand-navy mt-1 inline-block text-xs font-bold underline sm:text-sm">
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FoodMenuHero({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <section className="relative flex min-h-[420px] lg:container-page rounded-xl mx-auto justify-center items-center overflow-hidden py-12 sm:min-h-140">
      <Image
        src="/images/menu/hero-food-mobile.jpg"
        alt="Burgers, hot dog and milkshake from Americas Food Court brands"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center sm:hidden"
      />
      <Image
        src="/images/menu/hero-food.jpg"
        alt="Burgers, hot dog and milkshake from Americas Food Court brands"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[75%_center] sm:block lg:object-[100%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent sm:hidden" />

      <div className="container-page relative">
        <motion.div
          className="flex flex-col  gap-6 "
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/menu/food-order-hero.svg"
              alt="What are you in mood for today?"
              width={2170}
              height={630}
              priority
              className="h-auto w-[92vw] max-w-175 sm:w-150 lg:w-175"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display mt-14 text-lg text-white sm:text-xl"
          >
            Your Favorites, Delivered Fast
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-xl"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BrandCarousel from "./BrandCarousel";
import ImageSlider from "./ImageSlider";
import AnimatedSection from "@/components/ui/AnimatedSection";

const LEFT_IMAGES = [
  "/images/home/home-left-1.jpg",
  "/images/home/home-left-2.jpg",
  "/images/home/home-left-3.jpg",
];

const UP_RIGHT_IMAGES = [
  "/images/home/home-up-right-1.jpg",
  "/images/home/home-up-right-2.jpg",
];

const DOWN_RIGHT_IMAGES = [
  "/images/home/home-down-right-1.jpg",
  "/images/home/home-down-right-2.jpg",
  "/images/home/home-down-right-3.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroGrid() {
  return (
    <section className="relative flex min-h-[100vh] flex-col overflow-hidden pt-6 pb-3 sm:pt-8 sm:pb-4">
      <div className="container-page mx-auto flex flex-col gap-2">
        <motion.div
          className="flex flex-col gap-2 lg:h-[clamp(520px,72vh,760px)] lg:flex-row"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full lg:w-[52%]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-brand-red">
              <ImageSlider
                images={LEFT_IMAGES}
                alt="Man eating a loaded cheeseburger from Americas Food Court brands — One Stop. Everything You Crave."
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[75%_center]"
                priority
              />

              <div className="absolute inset-0 z-10 bg-[#d61c2a]/20" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-x-0 bottom-0 z-30 flex flex-wrap items-center justify-between gap-4 bg-brand-navy/95 px-5 py-4 sm:px-6 sm:py-5"
              >
                <p className="font-display text-white uppercase leading-[1]">
                  All the foods you love,
                  <br />
                  <span className="text-brand-yellow">in one place</span>
                </p>

                <Link
                  href="/food-menu"
                  className="bg-brand-red inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
                >
                  Order Your Food
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="absolute -top-6 left-6 z-20 w-[55%] sm:-top-8"
            >
              <Image
                src="/images/home/hero-msg.svg"
                alt="One stop. everything you crave."
                width={414}
                height={246}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-2 lg:w-[48%]"
          >
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="relative flex-1 overflow-hidden rounded-[28px]"
            >
              <ImageSlider
                images={UP_RIGHT_IMAGES}
                alt="Eat Like a Beast — MrBeast Burger promo"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                intervalMs={4500}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              className="relative flex-1 overflow-hidden rounded-[28px]"
            >
              <ImageSlider
                images={DOWN_RIGHT_IMAGES}
                alt="It's Burger Day — Big flavor, beast-sized satisfaction"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                intervalMs={5000}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatedSection>
          <BrandCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
}

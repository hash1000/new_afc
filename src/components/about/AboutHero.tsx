"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="container-page mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-10 pt-40 pb-16 sm:pt-44 lg:flex-row lg:gap-12">
      <div className="w-full lg:basis-[35%]">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          <motion.span
            className="text-brand-navy block"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            Your Favorite Brands.
          </motion.span>
          <motion.span
            className="text-brand-navy block"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Endless Cravings.
          </motion.span>
          <motion.span
            className="text-brand-red block"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            One Destination.
          </motion.span>
        </h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-6 max-w-sm leading-relaxed text-black/80"
        >
          Why settle for just one choice? America&apos;s Food Court brings
          multiple famous food brands together under one roof, serving
          everything from juicy burgers and fresh pizza to hot dogs, crispy
          chicken, desserts, and more.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/menu"
            className="bg-brand-red rounded-2xl px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
          >
            View Menu
          </Link>
          <Link
            href="/order"
            className="border-brand-navy text-brand-navy rounded-2xl border px-8 py-4 text-sm font-semibold transition-colors hover:bg-black/5"
          >
            Order Now
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:basis-[65%]"
      >
        <Image
          src="/images/about/hero-food.png"
          alt="Fries, burger, fried chicken sandwich, pizza slice, hot dog and drinks from Americas Food Court brands"
          priority
          height={600}
          width={900}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="mx-auto h-auto w-full max-w-lg object-contain lg:max-w-none"
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CareersHero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-16">
      <Image
        src="/images/franchising/storefront-dining-room-night.jpg"
        alt="Team members working together at an Americas Food Court location"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="bg-brand-navy-dark/75 absolute inset-0" />

      <div className="container-page relative mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Build Your Career With{" "}
          <span className="text-brand-yellow">Americas Food Court</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-xl leading-relaxed text-white/85"
        >
          From the front counter to franchise leadership, we&apos;re always
          looking for driven people who want to grow with a team that&apos;s
          serving up something bigger than fast food.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#open-positions"
            className="bg-brand-red rounded-2xl px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
          >
            View Open Positions
          </a>
          <a
            href="#apply"
            className="rounded-2xl border border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

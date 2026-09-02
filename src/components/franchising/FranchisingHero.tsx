"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ClipboardList, Package, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AUTO_ADVANCE_MS = 4000;

const FEATURES = [
  {
    icon: Package,
    title: "Multiple Revenue Streams",
    body: "Diverse menu and daypart offerings drive all-day sales and maximize ROI.",
  },
  {
    icon: Trophy,
    title: "Proven National Brands",
    body: "Partner with trusted, high-performing brands consumers already know and love.",
  },
  {
    icon: ClipboardList,
    title: "Flexible Formats",
    body: "Choose the format that fits your market, from compact to destination.",
  },
];

const FORMATS = [
  { img: "/images/franchising/storefront-exterior-night-01.jpg" },
  { img: "/images/franchising/storefront-drive-thru-menu.jpg" },
  { img: "/images/franchising/storefront-kiosk-mall.jpg" },
  { img: "/images/franchising/storefront-dining-room-night.jpg" },
  { img: "/images/franchising/storefront-travel-plaza.jpg" },
  { img: "/images/franchising/storefront-exterior-night-02.jpg" },
  { img: "/images/franchising/storefront-mall-entrance.jpg" },
  { img: "/images/franchising/storefront-airport-terminal.jpg" },
];

export default function FranchisingHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % FORMATS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="container-page mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] uppercase sm:text-5xl lg:text-6xl">
            <motion.span
              className="text-brand-navy block"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
              Own the
            </motion.span>
            <motion.span
              className="text-brand-red block"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Future of Food
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-brand-navy mt-5 max-w-md text-lg font-bold"
          >
            Every <span className="text-brand-red">Daypart.</span> Every{" "}
            <span className="text-brand-red">Craving.</span>
            <br />
            Every Revenue Opportunity.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-cream rounded-2xl border border-gray-200 p-5">
                <div className="border-brand-navy flex h-10 w-10 items-center justify-center rounded-full border">
                  <feature.icon className="text-brand-navy h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-brand-navy mt-3 text-sm font-bold">{feature.title}</h3>
                <p className="mt-2 text-xs text-gray-600">{feature.body}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#formats"
              className="bg-brand-red inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
            >
              Explore Opportunities <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#inquiry"
              className="border-brand-navy text-brand-navy inline-flex items-center gap-2 rounded-full border-2 bg-white px-7 py-4 text-sm font-semibold transition-colors hover:bg-black/5"
            >
              Speak with Our Team <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={FORMATS[current].img}
                  alt="Americas Food Court storefront"
                  fill
                  priority={current === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <span className="bg-brand-navy absolute top-0 left-0 rounded-br-2xl px-6 py-3 text-sm font-semibold text-white">
              Americas Food Court
            </span>

            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 p-3 shadow-xl backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-4">
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {FORMATS.map((format, i) => (
                  <button
                    key={format.img}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group text-center"
                  >
                    <div
                      className={`relative h-12 w-full overflow-hidden rounded-lg ring-2 transition-colors sm:h-16 ${
                        i === current ? "ring-brand-red" : "ring-transparent"
                      }`}
                    >
                      <Image
                        src={format.img}
                        alt=""
                        fill
                        sizes="12vw"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-2 flex justify-center gap-2 sm:mt-3">
                {FORMATS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-brand-red w-5" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Box, Headphones, LineChart, MoveUpRight } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  {
    icon: Box,
    title: "Multiple Brands",
    body: "One partner, more revenue streams.",
  },
  {
    icon: LineChart,
    title: "Market Expertise",
    body: "We know a variety of markets and formats.",
  },
  {
    icon: Headphones,
    title: "Turnkey Support",
    body: "Training, operations & marketing support.",
  },
  {
    icon: MoveUpRight,
    title: "Proven Results",
    body: "Scalable models built for long-term success.",
  },
];

export default function WhyPartner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20"
    >
      <h2 className="text-brand-navy container-page mx-auto text-center text-3xl font-black sm:text-4xl">
        <span className="text-brand-blue">Why Partner</span> With America&apos;s Food Court
      </h2>

      <div className="bg-brand-navy mt-14 lg:mt-24">
        <div className="container-page relative mx-auto py-10 lg:py-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="bg-brand-blue rounded-2xl p-6">
                <benefit.icon className="text-brand-yellow h-7 w-7" strokeWidth={2} />
                <h3 className="text-brand-yellow mt-6 text-base font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
"use client";

import { motion } from "framer-motion";
import { DollarSign, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";

const PERKS = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    body: "Earn great wages plus tips and performance incentives across every brand in our food court.",
  },
  {
    icon: TrendingUp,
    title: "Real Growth Paths",
    body: "Move from crew member to shift lead to management — many of our GMs started on the front line.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    body: "Hands-on onboarding and ongoing training so you build skills that last well beyond this job.",
  },
  {
    icon: HeartHandshake,
    title: "Team-First Culture",
    body: "A fast-paced, supportive environment where flexible scheduling and teamwork come standard.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyWorkHere() {
  return (
    <section className="bg-cream">
      <div className="container-page mx-auto py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-brand-navy text-3xl sm:text-4xl">
            Why Work With Us
          </h2>
          <p className="mt-4 text-black/70">
            We&apos;re more than a food court — we&apos;re a team of brands
            that invests in the people who make every location run.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="bg-brand-red/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <perk.icon className="text-brand-red h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-brand-navy mt-5 text-lg font-semibold">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {perk.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

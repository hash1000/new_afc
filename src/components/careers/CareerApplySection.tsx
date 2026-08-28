"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CareerApplyForm from "./CareerApplyForm";

const CHECKLIST = ["Quick 2-Minute Form", "No Resume Required", "Fast Response"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CareerApplySection() {
  return (
    <section id="apply" className="bg-gray-50 py-20">
      <div className="container-page mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/home/afc-logo.svg"
              alt="Americas Food Court"
              width={194}
              height={132}
              className="h-24 w-auto"
            />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mt-6 text-4xl leading-tight font-bold sm:text-5xl"
          >
            <span className="text-brand-navy block">Ready to Join</span>
            <span className="text-brand-red block">Our Team?</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mt-4 max-w-sm text-black/70"
          >
            Fill out the form below and our hiring team will follow up about
            next steps for your chosen position.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mt-6 flex flex-col gap-3"
          >
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium">
                <span className="bg-brand-red inline-block h-3 w-3 shrink-0 rotate-45" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <CareerApplyForm />
        </motion.div>
      </div>
    </section>
  );
}

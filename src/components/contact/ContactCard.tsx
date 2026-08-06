"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-2xl bg-[#f0f0f0] p-6 shadow-sm sm:p-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            className="font-display text-brand-navy text-4xl sm:text-5xl"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-black/80"
          >
            Have a question, a franchise inquiry, or just want to say hello?
            We&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6"
          >
            <Image
              src="/images/contact/food-tray.png"
              alt="Tray with pizza, hot dog, loaded fries, chicken sandwich, empanadas, fried chicken and a drink from Americas Food Court brands"
              width={900}
              height={649}
              className="h-auto w-full max-w-70 object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}

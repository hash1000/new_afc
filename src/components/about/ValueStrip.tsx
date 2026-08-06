"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Multiple Brands, One Destination",
    body: "Enjoy a diverse collection of well-known and fan-favorite food concepts in one convenient location.",
  },
  {
    title: "Something for Everyone",
    body: "With a wide variety of meals, snacks, drinks, and desserts, every guest can order exactly what they are craving.",
  },
  {
    title: "Familiar Favorites",
    body: "We bring together recognizable flavors and popular food choices that customers already know and love.",
  },
  {
    title: "Convenient for Every Occasion",
    body: "Whether it is a quick meal, a family outing, or food with friends, America's Food Court makes dining simple, flexible, and enjoyable.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ValueStrip() {
  return (
    <section className="bg-brand-red">
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/40 lg:gap-0">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="font-display text-brand-yellow text-lg leading-tight sm:text-xl">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-white/90">{value.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

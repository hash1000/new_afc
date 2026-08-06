"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Megaphone, Monitor, Settings, Truck } from "lucide-react";

const SUPPORT_ITEMS = [
  {
    icon: Building2,
    label: "Site & Development",
    body: "Site evaluation, layout design, permitting support and grand opening planning.",
  },
  {
    icon: GraduationCap,
    label: "Training",
    body: "Hands-on training for you and your team across operations, food, and technology.",
  },
  {
    icon: Truck,
    label: "Supply Chain",
    body: "Access to approved suppliers, quality ingredients, equipment and packaging.",
  },
  {
    icon: Megaphone,
    label: "Marketing",
    body: "National brand support, local store marketing guides, grand opening campaigns and more.",
  },
  {
    icon: Settings,
    label: "Operations",
    body: "Proven SOPs, quality assurance, menu innovation and ongoing performance support.",
  },
  {
    icon: Monitor,
    label: "Technology",
    body: "Modern POS, online ordering, delivery integration and real-time reporting tools.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FranchiseSupport() {
  return (
    <section className="container-page mx-auto py-12 lg:py-20">
      <h2 className="text-brand-navy text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        Comprehensive Franchise Support
      </h2>
      <p className="text-brand-navy mt-3 text-center text-base sm:text-lg">Built for you Success</p>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {SUPPORT_ITEMS.map((item, index) => (
          <motion.div
            key={item.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
          >
            <item.icon className="text-brand-navy h-11 w-11" strokeWidth={1.5} />
            <h3 className="text-brand-red mt-4 text-xl font-bold">{item.label}</h3>
            <p className="mt-2 max-w-xs text-sm text-black/70">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

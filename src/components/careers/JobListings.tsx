"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin } from "lucide-react";

interface Job {
  title: string;
  brand: string;
  location: string;
  type: string;
  pay: string;
  description: string;
}

const JOBS: Job[] = [
  {
    title: "Crew Member",
    brand: "Multiple Brands",
    location: "Various Locations",
    type: "Full-Time / Part-Time",
    pay: "$14 – $17/hr",
    description:
      "Prepare and serve food, keep the counter running smoothly, and deliver a great guest experience across our food court brands.",
  },
  {
    title: "Shift Leader",
    brand: "Multiple Brands",
    location: "Various Locations",
    type: "Full-Time",
    pay: "$17 – $20/hr",
    description:
      "Lead a crew during your shift, manage day-to-day operations, and help train new team members while keeping quality on point.",
  },
  {
    title: "Assistant General Manager",
    brand: "Multiple Brands",
    location: "Various Locations",
    type: "Full-Time",
    pay: "$45K – $55K/yr",
    description:
      "Support the General Manager with staffing, inventory, and daily operations across one or more brand counters in your location.",
  },
  {
    title: "General Manager",
    brand: "Multiple Brands",
    location: "Various Locations",
    type: "Full-Time",
    pay: "$55K – $70K/yr",
    description:
      "Own the performance of your location — P&L, team development, guest satisfaction, and operational excellence day in and day out.",
  },
  {
    title: "Franchise Operations Coordinator",
    brand: "Corporate",
    location: "Regional / Travel Required",
    type: "Full-Time",
    pay: "$60K – $75K/yr",
    description:
      "Support new and existing franchise partners with onboarding, training, and operational standards across multiple markets.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function JobListings() {
  return (
    <section id="open-positions" className="bg-white">
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
            Open Positions
          </h2>
          <p className="mt-4 text-black/70">
            Explore current openings across our locations. Don&apos;t see the
            right fit? Apply anyway — we&apos;re always growing.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-5">
          {JOBS.map((job, index) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col gap-5 rounded-2xl border border-black/10 p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-brand-navy text-xl font-semibold">
                    {job.title}
                  </h3>
                  <span className="bg-brand-yellow/20 text-brand-navy rounded-full px-3 py-1 text-xs font-semibold">
                    {job.brand}
                  </span>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
                  {job.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-black/60">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" aria-hidden="true" />
                    {job.pay}
                  </span>
                </div>
              </div>

              <a
                href="#apply"
                className="bg-brand-red inline-flex shrink-0 items-center justify-center rounded-2xl px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

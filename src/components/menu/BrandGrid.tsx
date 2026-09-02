"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/brands";

export default function BrandGrid({
  search,
  activeCategory,
}: {
  search: string;
  activeCategory: string;
}) {
  const filtered = brands.filter((brand) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = query === "" || brand.name.toLowerCase().includes(query);
    const matchesCategory = activeCategory === "all" || brand.category.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="container-page mx-auto py-10">
      <h2 className="text-brand-navy text-2xl font-bold sm:text-3xl">Our Brands</h2>

      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div
            key="grid"
            layout
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {filtered.map((brand) => (
              <motion.div
                key={brand.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-380/195 w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <Image
                  src={brand.foodImage}
                  alt={brand.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-12 left-4 w-[55%] max-w-45">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.logoWidth}
                    height={brand.logoHeight}
                    className="h-auto w-full object-contain drop-shadow-sm"
                  />
                </div>
                <Link
                  href={brand.orderUrl}
                  className="bg-brand-red absolute bottom-4 left-4 inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-red/90"
                >
                  Explore Menu
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 text-center text-sm text-black/50"
          >
            No brands match your search.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}

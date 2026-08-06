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
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5"
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
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={brand.foodImage}
                    alt={brand.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-cream flex flex-col items-start gap-2 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.logoWidth}
                    height={brand.logoHeight}
                    className="h-7 w-auto max-w-full object-contain sm:h-8"
                  />
                  <Link
                    href={brand.orderUrl}
                    className="bg-brand-red flex w-full shrink-0 items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-red/90 sm:w-auto"
                  >
                    Order Now
                  </Link>
                </div>
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

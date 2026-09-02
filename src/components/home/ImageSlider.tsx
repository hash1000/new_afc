"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSliderProps = {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
  intervalMs?: number;
  priority?: boolean;
};

export default function ImageSlider({
  images,
  alt,
  sizes,
  className,
  intervalMs = 4000,
  priority = false,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={current}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={images[current]}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          priority={priority && current === 0}
        />
      </motion.div>
    </AnimatePresence>
  );
}

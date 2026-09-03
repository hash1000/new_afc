"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/menu-items";

export default function MenuItemCard({
  item,
  image,
}: {
  item: MenuItem;
  image: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
        <button
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:cursor-pointer"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={isFavorite ? "#d02729" : "none"}
            aria-hidden="true"
          >
            <path
              d="M12 20.5s-7.5-4.6-10-9.2C0.3 7.8 2 4 5.7 4c2 0 3.5 1 4.8 2.6C11.8 5 13.3 4 15.3 4 19 4 20.7 7.8 19 11.3c-2.5 4.6-10 9.2-10 9.2z"
              stroke="#d02729"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <h3 className="text-brand-navy text-xs font-bold tracking-wide uppercase sm:text-sm">
          {item.name}
        </h3>
        <p className="line-clamp-3 flex-1 text-[11px] text-black/60 sm:text-xs">
          {item.description}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <button
            type="button"
            className="border-brand-navy text-brand-navy flex-1 rounded-lg border py-2 text-[11px] font-semibold whitespace-nowrap transition-colors hover:cursor-pointer hover:bg-brand-navy hover:text-white sm:text-xs"
          >
            Order Now
          </button>
          <button
            type="button"
            className="bg-brand-red flex-1 rounded-lg py-2 text-[11px] font-semibold whitespace-nowrap text-white transition-colors hover:cursor-pointer hover:bg-brand-red/90 sm:text-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

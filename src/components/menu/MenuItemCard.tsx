"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/menu-items";

export default function MenuItemCard({
  item,
  image,
  accentColor,
}: {
  item: MenuItem;
  image: string;
  accentColor?: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const showMeta = item.price !== undefined || item.rating !== undefined;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream/60 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-white p-3 sm:p-4">
        <Image
          src={item.image ?? image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:cursor-pointer hover:bg-white"
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
        <h3
          className={`text-xs font-bold tracking-wide uppercase sm:text-sm ${accentColor ? "" : "text-brand-red"}`}
          style={accentColor ? { color: accentColor } : undefined}
        >
          {item.name}
        </h3>
        <div className="flex items-start justify-between gap-2">
          <p className="line-clamp-3 text-[11px] text-black/60 sm:text-xs">
            {item.description}
          </p>
          {item.sizeLabel && (
            <span className="bg-brand-red shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-semibold whitespace-nowrap text-white sm:text-[10px]">
              {item.sizeLabel}
            </span>
          )}
        </div>

        {showMeta && (
          <div className="mt-auto flex items-center justify-between pt-1">
            {item.price !== undefined && (
              <span className="text-brand-navy text-base font-extrabold sm:text-lg">
                ${item.price.toFixed(2)}
              </span>
            )}
            {item.rating !== undefined && (
              <span className="flex items-center gap-1 text-[11px] text-black/60 sm:text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#fac819" aria-hidden="true">
                  <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z" />
                </svg>
                {item.rating.toFixed(1)}
                {item.ratingCount ? ` (${item.ratingCount})` : ""}
              </span>
            )}
          </div>
        )}

        <div className={`flex items-center gap-2 ${showMeta ? "" : "mt-auto"}`}>
          <button
            type="button"
            className="bg-brand-red flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-[11px] font-semibold whitespace-nowrap text-white transition-colors hover:cursor-pointer hover:bg-brand-red/90 active:bg-brand-red/80 sm:text-xs"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2.3 4.6A1 1 0 0 0 5.6 19H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="21" r="1" fill="currentColor" />
              <circle cx="16" cy="21" r="1" fill="currentColor" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { Brand } from "@/lib/brands";
import type { MenuSection } from "@/lib/menu-items";
import BrandMenuHero from "./BrandMenuHero";
import BrandMenuSection from "./BrandMenuSection";

export default function BrandMenuContent({
  brand,
  sections,
}: {
  brand: Brand;
  sections: MenuSection[];
}) {
  return (
    <>
      <BrandMenuHero brand={brand} />

      <div className="container-page mx-auto mt-6 flex flex-col gap-10 pb-16 sm:mt-8 sm:gap-14">
        <Link
          href="/food-menu"
          className="text-brand-navy -ml-3 inline-flex w-fit items-center gap-1.5 rounded-full py-2 pr-4 pl-3 text-xs font-semibold transition-colors hover:bg-black/5 sm:text-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to all brands
        </Link>

        {brand.comingSoon ? (
          <section className="rounded-2xl border border-black/5 bg-cream px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
            <span className="text-brand-red text-xs font-bold tracking-[0.18em] uppercase">New menu in progress</span>
            <h1 className="font-display text-brand-navy mt-3 text-2xl sm:text-3xl">A fresh menu is on the way</h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-black/60 sm:text-base">
              We are putting the finishing touches on {brand.name}. Check back soon for the full menu and ordering details.
            </p>
            <Link
              href="/food-menu"
              className="bg-brand-red mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
            >
              Browse available brands
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        ) : (
          sections.map((section) => (
            <BrandMenuSection
              key={section.id}
              section={section}
              image={brand.foodImage}
              imageFit={brand.id === "mrbeast" ? "cover" : undefined}
              accentColor={brand.menuAccentColor}
            />
          ))
        )}
      </div>
    </>
  );
}

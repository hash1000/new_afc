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

        {sections.map((section) => (
          <BrandMenuSection
            key={section.id}
            section={section}
            image={brand.foodImage}
            accentColor={brand.menuAccentColor}
          />
        ))}
      </div>
    </>
  );
}

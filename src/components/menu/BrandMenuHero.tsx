import Image from "next/image";
import type { Brand } from "@/lib/brands";
import ComingSoonPlaceholder from "./ComingSoonPlaceholder";

export default function BrandMenuHero({ brand }: { brand: Brand }) {
  if (brand.comingSoon) {
    return (
      <section className="container-page mx-auto pt-4 sm:pt-8">
        <div className="relative flex min-h-56 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-brand-red/10 bg-[repeating-linear-gradient(135deg,#fff8ea_0,#fff8ea_14px,#f8edd8_14px,#f8edd8_28px)] px-6 py-8 text-center shadow-sm sm:min-h-64 sm:gap-5">
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-yellow/20" aria-hidden="true" />
          <Image
            src={brand.logo}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="relative z-10 h-auto max-h-20 w-auto max-w-[70%] object-contain sm:max-h-24"
          />
          <div className="relative z-10 flex flex-col items-center gap-1">
            <span className="font-display text-lg text-brand-red sm:text-2xl">Coming Soon</span>
            <p className="max-w-md text-xs text-brand-navy/70 sm:text-sm">
              {brand.name} is preparing something delicious. The full menu will be available here soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (brand.menuHeroImage) {
    const hasHeroImageSize = Boolean(brand.menuHeroImageWidth && brand.menuHeroImageHeight);

    return (
      <section className="container-page mx-auto pt-6 sm:pt-8">
        <div
          className="relative flex min-h-64 flex-col items-center justify-between overflow-hidden rounded-xl px-4 py-4 sm:min-h-0 sm:flex-row sm:aspect-[1120/156] sm:px-4 sm:py-0"
          style={{
            backgroundColor: brand.menuHeroColor ?? "#fff8ea",
          }}
        >
          <Image
            src={brand.menuHeroLogo ?? brand.logo}
            alt={brand.name}
            width={brand.menuHeroLogoWidth ?? brand.logoWidth}
            height={brand.menuHeroLogoHeight ?? brand.logoHeight}
            priority
            className="relative z-10 h-24 w-full object-contain object-center sm:h-[94%] sm:w-[38%] sm:object-left"
          />
          <div
            className="relative flex h-32 w-full shrink-0 items-center justify-center sm:h-full sm:w-[62%] sm:justify-end"
          >
            {hasHeroImageSize ? (
              <Image
                src={brand.menuHeroImage}
                alt={brand.name}
                width={brand.menuHeroImageWidth}
                height={brand.menuHeroImageHeight}
                sizes="(min-width: 640px) 40vw, 50vw"
                className="block h-auto max-h-full w-auto max-w-full object-contain"
              />
            ) : (
              <Image
                src={brand.menuHeroImage}
                alt={brand.name}
                fill
                sizes="(min-width: 640px) 40vw, 50vw"
                className={
                  brand.id === "mrbeast"
                    ? "object-cover object-[center_63%]"
                    : "object-contain object-right"
                }
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  if (brand.menuBanner) {
    const bannerWidth = brand.menuBannerWidth ?? 1120;
    const bannerHeight = brand.menuBannerHeight ?? 156;

    return (
      <section className=" relative container-page mx-auto pb-6 sm:pt-14 ">
        <div
          className="relative w-full  rounded-2xl shadow-sm"
          style={{ aspectRatio: `${bannerWidth} / ${bannerHeight}` }}
        >
          <Image
            src={brand.menuBanner}
            alt={brand.name}
            width={bannerWidth}
            height={bannerHeight}
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="h-full w-full object-contain object-center top-4"
          />
          {brand.menuBannerLogo && (
            <div className="absolute top-6 left-2 h-[80%] -translate-y-1/2 sm:left-8">
              <Image
                src={brand.menuBannerLogo}
                alt={brand.name}
                width={brand.menuBannerLogoWidth ?? brand.logoWidth}
                height={brand.menuBannerLogoHeight ?? brand.logoHeight}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="container-page mx-auto pt-6 sm:pt-8">
      <div className="relative flex h-32 items-center justify-between overflow-hidden rounded-2xl bg-[#eaf4ff] px-6 sm:h-40 sm:px-10">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={brand.logoWidth}
          height={brand.logoHeight}
          priority
          className="h-16 w-auto object-contain sm:h-24"
        />
        <div className="relative hidden h-full w-1/2 sm:block">
          {brand.comingSoon ? (
            <ComingSoonPlaceholder brandName={brand.name} />
          ) : (
            <Image
              src={brand.foodImage}
              alt={brand.name}
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
          )}
        </div>
      </div>
    </section>
  );
}

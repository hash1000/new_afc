import Image from "next/image";
import type { Brand } from "@/lib/brands";

export default function BrandMenuHero({ brand }: { brand: Brand }) {
  if (brand.menuBanner) {
    return (
      <section className="container-page mx-auto pt-6 sm:pt-8">
        <div className="relative h-24 w-full overflow-hidden rounded-2xl shadow-sm sm:h-36">
          <Image
            src={brand.menuBanner}
            alt={brand.name}
            fill
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    );
  }

  if (brand.menuHeroImage) {
    return (
      <section className="container-page mx-auto pt-6 sm:pt-8">
        <div className="bg-cream relative flex h-32 items-center justify-between overflow-hidden rounded-2xl border border-black/10 px-6 sm:h-40 sm:px-10">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-14 w-auto object-contain sm:h-20"
          />
          <div className="relative h-[85%] w-1/2 shrink-0 sm:w-2/5">
            <Image
              src={brand.menuHeroImage}
              alt={brand.name}
              fill
              sizes="(min-width: 640px) 40vw, 50vw"
              className="object-contain object-bottom-right"
            />
          </div>
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
          <Image
            src={brand.foodImage}
            alt={brand.name}
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

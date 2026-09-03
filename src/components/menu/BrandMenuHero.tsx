import Image from "next/image";
import type { Brand } from "@/lib/brands";

export default function BrandMenuHero({ brand }: { brand: Brand }) {
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

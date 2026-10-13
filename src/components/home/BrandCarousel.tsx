import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  { name: "MrBeast Burger", file: "Mr Beast Burger.png", href: "/food-menu/mrbeast", w: 211, h: 99 },
  { name: "California Pizza", file: "California Pizza.png", href: "/food-menu/cpk", w: 224, h: 51 },
  { name: "The Cheesecake Factory Bakery", file: "Cheesecake Factory.png", href: "/food-menu/cheesecake", w: 214, h: 109 },
  { name: "The Fry Chicks", file: "TFC.png", href: "/food-menu/fry-chicks", w: 202, h: 104 },
  { name: "One More Slice", file: "One more Slice.png", href: "/food-menu/oneslice", w: 194, h: 101 },
  { name: "Dog It Up America", file: "Dog it up America.png", href: "/food-menu/dogitup", w: 182, h: 114 },
  { name: "Man vs Fries", file: "Man vs Fries.png", href: "/food-menu/manvsfries", w: 181, h: 119 },
  // { name: "Empanadas United", file: "Empanadas United.png", href: "/food-menu", w: 159, h: 122 },
  { name: "Taco Teoria", file: "Taco Teoria.png", href: "/food-menu", w: 196, h: 99 },
];

export default function BrandCarousel() {
  return (
    <section aria-label="Our food brands" className="brand-marquee overflow-hidden bg-cream py-5 sm:py-7">
      <div className="brand-marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
            {BRANDS.map((brand) => (
              <Link key={brand.name} href={brand.href} tabIndex={copy === 1 ? -1 : undefined} aria-label={`Explore ${brand.name}`} className="flex h-24 w-44 shrink-0 items-center justify-center px-6 outline-offset-[-4px] sm:w-52">
                <Image src={`/images/brand-logos/${brand.file}`} alt={brand.name} width={brand.w} height={brand.h} className="max-h-20 w-auto max-w-full object-contain" />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

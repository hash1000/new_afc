import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section aria-labelledby="home-heading" className="home-hero relative isolate flex items-center overflow-hidden bg-[#81522f]">
      <Image
        src="/images/hero-image.png"
        alt="Burgers, a loaded hot dog, strawberry milkshake and pepperoni pizza at Americas Food Court"
        fill
        preload
        sizes="100vw"
        className="hero-background -z-20 object-cover"
      />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="hero-content mx-auto w-full max-w-[1440px]  pt-32 pb-16 px-[2%] sm:px-[4%] lg:pt-40">
        <h1 id="home-heading" className="font-display text-[clamp(2.75rem,5.4vw,6rem)] leading-[1.04] tracking-[-0.025em] text-white uppercase">
          One stop.<br />Everything<br />You crave.
        </h1>
        <div className="mt-8 flex sm:mt-10">
          <Link href="/food-menu" className="inline-flex min-h-14 min-w-44 items-center justify-center rounded-xl bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-red/90">Explore Menu</Link>
        </div>
      </div>

    </section>
  );
}

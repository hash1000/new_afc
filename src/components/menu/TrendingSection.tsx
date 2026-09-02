import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TrendingSection() {
  return (
    <section className="container-page mx-auto mt-12 sm:mt-16">
      <AnimatedSection>
        <h2 className="font-display text-brand-red text-xl sm:text-2xl">
          Trending Now
        </h2>
      </AnimatedSection>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <AnimatedSection delay={0.1} className="relative aspect-641/349 w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/menu/trending-left.jpg"
            alt="It's Burger Day — big flavor, beast-sized satisfaction"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>

        <div className="flex flex-col gap-4 lg:gap-6">
          <AnimatedSection delay={0.2} className="relative aspect-677/169 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/menu/trending-up-right.jpg"
              alt="Buy 2 slices, get one free at One More Slice Pizza"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="relative aspect-677/169 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/menu/trending-down-right.jpg"
              alt="Load up your dog at Dog It Up America"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

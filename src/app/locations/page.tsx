import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationLocator from "@/components/locations/LocationLocator";

export const metadata: Metadata = {
  title: "Locations — Americas Food Court",
  description:
    "Find an Americas Food Court location in Palos Heights, Chicago, or Rosenberg.",
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="bg-cream px-4 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-brand-red text-sm font-bold tracking-[0.18em] uppercase">
              Find us near you
            </p>
            <h1 className="font-display text-brand-navy mt-4 text-4xl sm:text-5xl">
              Our Locations
            </h1>
            <p className="mt-5 text-base leading-relaxed text-black/70 sm:text-lg">
              Visit Americas Food Court for all the foods you love, all in one
              destination.
            </p>
          </div>
        </section>

        <LocationLocator />
      </main>
      <Footer />
    </>
  );
}
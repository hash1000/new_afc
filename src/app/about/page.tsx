import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import ValueStrip from "@/components/about/ValueStrip";

export const metadata: Metadata = {
  title: "About Us — Americas Food Court",
  description:
    "Learn about Americas Food Court — a single destination bringing together your favorite food brands under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <ValueStrip />
      </main>
      <Footer />
    </>
  );
}

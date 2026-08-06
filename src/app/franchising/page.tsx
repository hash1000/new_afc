import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandCarousel from "@/components/home/BrandCarousel";
import FranchisingHero from "@/components/franchising/FranchisingHero";
import FormatsGrid from "@/components/franchising/FormatsGrid";
import FranchiseSupport from "@/components/franchising/FranchiseSupport";
import WhyPartner from "@/components/franchising/WhyPartner";
import FranchiseInquiry from "@/components/franchising/FranchiseInquiry";

export const metadata: Metadata = {
  title: "Franchising — Americas Food Court",
  description:
    "Own the future of food. Explore franchise opportunities with Americas Food Court across drive-thru, traditional, travel plaza and convenience store formats.",
};

export default function FranchisingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <FranchisingHero />
        <BrandCarousel />
        <FormatsGrid />
        <FranchiseSupport />
        <WhyPartner />
        <FranchiseInquiry />
      </main>
      <Footer />
    </>
  );
}

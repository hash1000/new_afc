import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WhyWorkHere from "@/components/careers/WhyWorkHere";
import JobListings from "@/components/careers/JobListings";
import CareerApplySection from "@/components/careers/CareerApplySection";

export const metadata: Metadata = {
  title: "Careers — Americas Food Court",
  description:
    "Explore open positions at Americas Food Court, from crew member to franchise operations. Build your career with a team that's always growing.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <CareersHero />
        <WhyWorkHere />
        <JobListings />
        <CareerApplySection />
      </main>
      <Footer />
    </>
  );
}

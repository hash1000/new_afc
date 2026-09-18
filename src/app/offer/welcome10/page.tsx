import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Welcome10Form from "@/components/offer/Welcome10Form";

export const metadata: Metadata = {
  title: "Welcome Offer — Americas Food Court",
  description: "Claim your one-time 10% welcome offer from Americas Food Court.",
};

export default function Welcome10Page() {
  return (
    <>
      <Navbar />
      <main className="bg-cream flex flex-1 items-center py-14 sm:py-20">
        <div className="container-page mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-brand-red text-sm font-bold uppercase tracking-[0.2em]">Scan. Claim. Crave.</p>
            <h1 className="font-display text-brand-navy mt-3 text-5xl leading-[1.02] uppercase sm:text-6xl">Welcome to 10% off</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-black/70 sm:text-lg">Enter your details to receive a one-time welcome voucher for your next visit.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-brand-navy text-xl font-bold">Get your voucher</h2>
            <p className="mt-2 text-sm text-black/60">Enter your details to get your code. Resubmitting refreshes your code until it is used.</p>
            <div className="mt-6"><Welcome10Form /></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
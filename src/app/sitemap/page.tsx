import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Sitemap — Americas Food Court",
  description: "Browse all pages on the Americas Food Court website.",
};

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Order Food", href: "/food-menu" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Partner With Us", href: "/franchising" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className="container-page mx-auto flex w-full flex-1 flex-col py-16 sm:py-24">
        <h1 className="font-display text-brand-navy text-4xl sm:text-5xl">
          Sitemap
        </h1>
        <p className="mt-4 max-w-2xl text-black/70">
          Browse the pages and locations available on the Americas Food Court
          website.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <section>
            <h2 className="text-brand-navy text-xl font-semibold">Pages</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link className="text-brand-red hover:underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-brand-navy text-xl font-semibold">Locations</h2>
            <ul className="mt-4 flex flex-col gap-3 text-black/70">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link className="text-brand-red hover:underline" href="/locations">
                    {location.name}
                  </Link>
                  <span className="ml-2">({location.cityStateZip})</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
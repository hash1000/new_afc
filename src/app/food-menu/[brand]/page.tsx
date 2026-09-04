import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMenuContent from "@/components/menu/BrandMenuContent";
import { brands } from "@/lib/brands";
import { brandMenus } from "@/lib/menu-items";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    return { title: "Menu — Americas Food Court" };
  }

  return {
    title: `${brand.name} Menu — Americas Food Court`,
    description: `Browse the full ${brand.name} menu — combos, mains, sides, desserts and beverages.`,
  };
}

export default async function BrandMenuPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);
  const sections = brandMenus[brandId] ?? [];

  if (!brand) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BrandMenuContent brand={brand} sections={sections} />
      </main>
      <Footer />
    </>
  );
}

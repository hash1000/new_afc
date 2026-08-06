import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuContent from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "Menu — Americas Food Court",
  description:
    "Browse every brand at Americas Food Court — burgers, pizza, chicken, hot dogs, desserts and more.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <MenuContent />
      </main>
      <Footer />
    </>
  );
}

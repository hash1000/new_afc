import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodMenuContent from "@/components/menu/FoodMenuContent";

export const metadata: Metadata = {
  title: "Food Menu — Americas Food Court",
  description:
    "Browse every brand at Americas Food Court — burgers, pizza, chicken, hot dogs, desserts and more.",
};

export default function FoodMenuPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <FoodMenuContent />
      </main>
      <Footer />
    </>
  );
}

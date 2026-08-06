import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import BrandCarousel from "@/components/home/BrandCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSlider />
        <BrandCarousel />
        <div className="h-16" />
      </main>
      <Footer />
    </>
  );
}

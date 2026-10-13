import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import BrandCarousel from "@/components/home/BrandCarousel";

export default function Home() {
  return (
    <>
      <div className="home-viewport">
        <Navbar overlay />
        <main className="flex min-h-0 flex-col">
          <HomeHero />
          <BrandCarousel />
        </main>
      </div>
      <Footer />
    </>
  );
}

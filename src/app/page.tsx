import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroGrid from "@/components/home/HeroGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroGrid />
      </main>
      <Footer />
    </>
  );
}

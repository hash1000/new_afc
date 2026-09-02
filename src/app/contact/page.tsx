import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCard from "@/components/contact/ContactCard";

export const metadata: Metadata = {
  title: "Contact Us — Americas Food Court",
  description:
    "Have a question, a franchise inquiry, or just want to say hello? Get in touch with Americas Food Court.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container-page mx-auto flex flex-1 flex-col justify-center py-16 sm:py-24">
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}

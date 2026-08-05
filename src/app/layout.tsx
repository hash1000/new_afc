import type { Metadata } from "next";
import { Inter, Paytone_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const paytoneOne = Paytone_One({
  variable: "--font-paytone-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Americas Food Court — Everyone Gets What They Crave",
  description:
    "Burgers, pizza, chicken, hot dogs, desserts and more — all from one convenient food destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${paytoneOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

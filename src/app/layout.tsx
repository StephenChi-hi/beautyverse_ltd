import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beautyverse – Skincare & Cosmetics for Radiant Confidence",
  description:
    "Explore Beautyverse's range of skincare and cosmetics designed to make you feel beautiful, confident, and cared for. Science-backed formulas, luxurious textures, and results you can see and feel.",
  generator:
    "Beautyverse skincare, Beautyverse cosmetics, premium skincare, luxury beauty products, self-care skincare, science-backed cosmetics, glowing skin solutions, makeup and skincare",
  keywords: [
    "skincare",
    "cosmetics",
    "luxury beauty",
    "premium skincare",
    "science-backed skincare",
    "makeup and skincare",
    "self-care beauty products",
    "radiant skin",
    "glowing skin solutions",
    "Beautyverse products",
  ],
  applicationName: "Beautyverse",
  openGraph: {
    title: "Beautyverse – Skincare & Cosmetics",
    description:
      "From nourishing skincare to stunning cosmetics, Beautyverse creates products that make you look and feel your best — inside and out.",
    url: "https://www.beautyverse.com",
    siteName: "Beautyverse",
    images: [
      {
        url: "https://res.cloudinary.com/dz0vukmgt/image/upload/v1754830271/5819023273072118293_a8phrh.jpg",
        width: 1200,
        height: 630,
        alt: "Beautyverse skincare and cosmetics collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beautyverse",
    title: "Beautyverse – Skincare & Cosmetics",
    description:
      "Skincare and cosmetics that blend artistry, science, and care — so you can feel confident in your own skin.",
    images:
      "https://res.cloudinary.com/dz0vukmgt/image/upload/v1754830271/5819023273072118293_a8phrh.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1E1E1E]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

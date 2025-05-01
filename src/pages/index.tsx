import Banners from "@/components/Banners";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import YandexMaps from "@/components/YandexMaps";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <Banners />
      <Products />
      <Footer />
    </div>
  );
}

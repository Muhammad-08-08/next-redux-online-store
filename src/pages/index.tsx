import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banners from "@/components/Banners";
import Products from "@/components/Products";
import Maps from "@/components/bizhaqimizda";

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
    <div
      className={`${geistSans.className} ${geistMono.className}`}
    >
      <Banners />
      <Products />
      <Maps />
    </div>
  );
}

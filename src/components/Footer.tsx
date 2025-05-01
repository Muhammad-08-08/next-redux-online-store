import { QrCode } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CgFacebook, CgInstagram, CgYoutube } from "react-icons/cg";
import { PiTelegramLogo } from "react-icons/pi";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <p className="text-slate-400">Savolingiz bormi? Qo'ng'iroq qiling</p>
          <p className="text-2xl font-bold py-2">+998 77 305 82 08</p>

          <div className="flex gap-3 py-4">
            {[CgFacebook, PiTelegramLogo, CgInstagram, CgYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-slate-700 p-2 rounded hover:bg-orange-500 transition-colors"
                >
                  <Icon size={20} />
                </div>
              )
            )}
          </div>

          <p className="underline cursor-pointer text-slate-400 hover:text-white transition">
            Do‘konimiz manzillari
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Kompaniya</h2>
          {[
            "Yuridik shaxslar uchun",
            "Biz haqimizda",
            "Yangiliklar va bloglar",
            "IMEI ni tekshirish",
          ].map((item, i) => (
            <p
              key={i}
              className="text-slate-400 hover:text-white cursor-pointer mb-2 text-sm transition"
            >
              {item}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Ma'lumot</h2>
          {[
            "Bepul yetkazib berish",
            "Texnomartda ishlash",
            "Shaxsiy kabinet",
            "Aloqa raqamlari",
          ].map((item, i) => (
            <p
              key={i}
              className="text-slate-400 hover:text-white cursor-pointer mb-2 text-sm transition"
            >
              {item}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Xaridorga yordam</h2>
          {["Mahsulotni qaytarish", "Mahsulotlar uchun kafolat"].map(
            (item, i) => (
              <p
                key={i}
                className="text-slate-400 hover:text-white cursor-pointer mb-2 text-sm transition"
              >
                {item}
              </p>
            )
          )}
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Ilovani yuklab olish</h2>
          <div className="flex gap-4">
            <QrCode size={90} />
            <div className="space-y-2">
              <div className="flex gap-2">
                <Image
                  src="https://texnomart.uz/_nuxt/img/googleplay.2b150ef.svg"
                  alt="Google Play"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://texnomart.uz/_nuxt/img/appstore.c200a90.svg"
                  alt="App Store"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://texnomart.uz/_nuxt/img/appgallery.166b7d5.svg"
                  alt="App Gallery"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-xs">Ilovani yuklab olish</p>
              <p className="text-xs">QR kodni skanerlang</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10" />

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p className="text-center lg:text-left">
          2016–2025 © texnomart.uz. Barcha huquqlar himoyalangan.{" "}
          <br className="hidden lg:block" />
          Tovarlarning narxi va xarid shartlari joriy sanaga amal qiladi.
        </p>
        <div className="flex gap-3">
          {[
            "uzcard.fbf7a3b.png",
            "humo.ce272fe.png",
            "payme.fac2924.png",
            "click.b558a2e.png",
          ].map((img, i) => (
            <Image
              key={i}
              src={`https://texnomart.uz/_nuxt/img/${img}`}
              alt="Payment"
              width={70}
              height={18}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

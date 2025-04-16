import { RootState } from "@/redux/store";
import Link from "next/link";
import { BiHeart, BiSearch } from "react-icons/bi";
import { RiUser2Fill } from "react-icons/ri";
import Cart from "./features/Cart";
import Liked from "./features/liked";

function Navbar() {
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/">
            <img
              className="cursor-pointer w-32"
              src="/logo.png"
              alt=" logo"
            />
          </Link>
          <button className="px-5 py-2 bg-orange-500 text-white font-semibold text-lg flex items-center gap-2 rounded-lg hover:bg-orange-600 transition-all duration-300">
            📦 Katalog
          </button>
        </div>

        <div className="flex items-center w-1/2 bg-white border border-orange-400 px-4 py-2 rounded-full shadow-sm">
          <BiSearch className="text-orange-500" />
          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full px-3 focus:outline-none text-black"
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition cursor-pointer">
            <RiUser2Fill className="w-6 h-6" />
            <p className="text-sm mt-1">Kirish</p>
          </div>

          <Liked />

          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

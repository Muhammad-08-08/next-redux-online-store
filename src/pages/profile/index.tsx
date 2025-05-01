import { Switch } from "@headlessui/react";
import { FiBox, FiClock, FiCreditCard, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/Auth-slice";
import Link from "next/link";

const ProfilePage = () => {
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen  bg-gray-100 py-8 px-4">
      <div className="mx-auto bg-gray-100 space-y-8 px-10">
        <div className="text-sm text-gray-500">
          <span className="bg-gray-200 px-2 py-1 rounded-md">Bosh sahifa</span>
          <span className="mx-2">/</span>
          <span className="text-black font-semibold">Shaxsiy kabinet</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="rounded-2xl shadow-md p-6 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                M
              </div>
              <div>
                <p className="font-semibold text-gray-800">Muhammad</p>
                <p className="text-xs text-gray-600">+998773058208</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer transition">
                <FiCreditCard /> <span>Mening to'lovlarim</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer transition">
                <FiClock /> <span>To'lov tarixi</span>
              </div>
              <Link
                href="/buyurtmalar/491"
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer transition"
              >
                <FiBox /> <span>Onlayn buyurtmalar</span>
              </Link>
              <div
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer transition"
              >
                <FiLogOut /> <span>Chiqish</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Shaxsiy ma'lumotlar
                </h3>
                <p className="text-gray-800">Muhammad</p>
                <p className="text-gray-500 text-sm">Telefon: +998773058208</p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                O'zgartirish
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Xabarlar va yangiliklar
                </h3>
                <p className="text-gray-500 text-sm">
                  Aksiyalar va chegirmalar haqida ma’lumot olishni xohlaysizmi?
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <Switch
                    checked={smsEnabled}
                    onChange={setSmsEnabled}
                    className={`${
                      smsEnabled ? "bg-yellow-400" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        smsEnabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                  <span className="text-gray-700">SMS orqali</span>
                </div>

                <div className="flex items-center gap-4">
                  <Switch
                    checked={telegramEnabled}
                    onChange={setTelegramEnabled}
                    className={`${
                      telegramEnabled ? "bg-yellow-400" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        telegramEnabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                  <span className="text-gray-700">Telegram orqali</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
                <h3 className="font-semibold text-lg">Mening kartam</h3>
                <p className="text-gray-500 text-sm">Mavjud emas</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">
                    Yetkazib berish manzili
                  </h3>
                  <p className="text-gray-500 text-sm">Manzil qo‘shilmagan</p>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-xl transition text-sm">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

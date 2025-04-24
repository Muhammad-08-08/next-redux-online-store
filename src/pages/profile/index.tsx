import { Switch } from "@headlessui/react";
import { FiBox, FiClock, FiCreditCard, FiLogOut } from "react-icons/fi";

import { useState } from "react";

const ProfilePage = () => {
    const [smsEnabled, setSmsEnabled] = useState(false);
    const [telegramEnabled, setTelegramEnabled] = useState(false);

    return (
        <div className="bg-[#f5f5f5] min-h-screen py-10 font-sans">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-sm text-gray-400 mb-6">
                    <span className="bg-gray-200 px-2 py-1 rounded">Bosh sahifa</span> /
                    <span className="ml-2 text-black font-medium">Shaxsiy kabinet</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-[12px] shadow p-5 space-y-5 text-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                                M
                            </div>
                            <div>
                                <div className="font-semibold text-sm">Muhammad</div>
                                <div className="text-gray-500 text-xs">+998773058208</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer">
                                <FiCreditCard /> Mening to‘lovlarim
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer">
                                <FiClock /> To‘lov tarixi
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 cursor-pointer">
                                <FiBox /> Onlayn buyurtmalar
                            </div>
                            <div className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer">
                                <FiLogOut /> Chiqish
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        <div className="bg-white rounded-[12px] shadow p-5 flex justify-between items-start text-sm">
                            <div>
                                <h3 className="font-semibold text-base mb-1">Shaxsiy ma’lumotlar</h3>
                                <p className="text-gray-800">Muhammad</p>
                                <p className="text-gray-500">Telefon: +998773058208</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:underline">O‘zgartirish</button>
                        </div>

                        <div className="bg-white rounded-[12px] shadow p-5 text-sm">
                            <h3 className="font-semibold text-base mb-1">Xabarlar yoki yangiliklar</h3>
                            <p className="text-gray-500 mb-4">
                                Aksiyalar va chegirmalar haqida ma’lumot olish
                            </p>
                            <div className="flex gap-10">
                                <div className="flex items-center gap-2">
                                    <Switch
                                        checked={smsEnabled}
                                        onChange={setSmsEnabled}
                                        className={`${smsEnabled ? "bg-yellow-400" : "bg-gray-200"
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                                    >
                                        <span
                                            className={`${smsEnabled ? "translate-x-6" : "translate-x-1"
                                                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                                        />
                                    </Switch>
                                    <span className="text-gray-700">SMS orqali</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Switch
                                        checked={telegramEnabled}
                                        onChange={setTelegramEnabled}
                                        className={`${telegramEnabled ? "bg-yellow-400" : "bg-gray-200"
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                                    >
                                        <span
                                            className={`${telegramEnabled ? "translate-x-6" : "translate-x-1"
                                                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                                        />
                                    </Switch>
                                    <span className="text-gray-700">Telegram orqali</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="bg-white rounded-[12px] shadow p-5">
                                <h3 className="font-semibold text-base mb-1">Mening kartam</h3>
                                <p className="text-gray-500">Mavjud emas</p>
                            </div>
                            <div className="bg-white rounded-[12px] shadow p-5 flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-base mb-1">
                                        Yetkazib berish manzili
                                    </h3>
                                    <p className="text-gray-500">Manzil qo‘shilmagan</p>
                                </div>
                                <button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-xl">
                                    Qo‘shish
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
import { Button } from "@/components/ui/button";
import { rasmiylashtirish } from "@/redux/cart-slice";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSubmit() {
    axios
      .post(
        "https://nt.softly.uz/api/front/orders",
        {
          address: address,
          items: cart.map((item) => ({
            productId: item.product.id,
            quantity: item.qty,
          })),
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then(() => {
        toast.success("Buyurtma rasmiylashtirildi");
        router.push("/profile");
        dispatch(rasmiylashtirish());
      })
      .catch(() => {
        toast.error("xatolik");
      });
  }

  return (
    <div className="bg-[#F9F9F9] py-10 px-4 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:underline cursor-pointer">Bosh sahifa</span> /{" "}
          <span className="hover:underline cursor-pointer">Xarid</span> /{" "}
          <span className="text-black font-medium">
            Xaridni rasmiylashtirish
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-8">
          Xaridni rasmiylashtirish
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                1. Sizning ma'lumotlaringiz
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Telefon"
                  defaultValue="+998"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Ism"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Familiya"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                2. Qabul qilish usuli
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <button className="border border-yellow-400 text-yellow-600 bg-yellow-100 font-medium rounded-full px-6 py-2">
                  Yetkazib berish
                </button>
                <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-600">
                  Dokondan olib ketish
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
                  <option>Toshkent shahri</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
                  <option>Shahar / tuman</option>
                </select>
                <input
                  type="text"
                  placeholder="Kvartal (agar bolsa)"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Manzil (masalan: Yunusobod 13-kvartal)"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
              />
              <div className="flex flex-wrap gap-4">
                <button className="border border-yellow-500 bg-yellow-100 rounded-lg px-6 py-3 w-full md:w-auto text-center">
                  Ertaga yoki keyinroq
                  <br />
                  <span className="text-sm text-gray-600">30 000 so'm</span>
                </button>
                <button className="border border-gray-300 rounded-lg px-6 py-3 w-full md:w-auto text-center">
                  Tez yetkazib berish
                  <br />
                  <span className="text-sm text-gray-600">30 000 so'mdan</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                3. Tolov usulini tanlang
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                {[
                  "Payme",
                  "Click",
                  "Onlayn karta orqali",
                  "Qabul qilinganda",
                  "Muddatli tolov",
                ].map((method, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-300 rounded-lg px-4 py-3 text-center text-sm text-gray-800 cursor-pointer hover:shadow"
                  >
                    {method}
                  </div>
                ))}
              </div>
              <input
                type="text"
                placeholder="Buyurtmaga izoh"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />

              <Button
                onClick={() => {
                  handleSubmit();
                }}
                className="w-full my-4 cursor-pointer bg-amber-600 hover:bg-amber-700 transition-all duration-700 active:scale-95"
              >
                Xaridni Rasmiylashtirish
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-4">
            <div className="border border-gray-200 bg-white rounded-xl p-4 shadow-sm">
              {cart.map((item) => {
                return (
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-600">
                        {Number(item.product.price).toLocaleString("ru")} so'm
                      </p>
                    </div>
                  </div>
                );
              })}
              <hr className="my-2" />
              <div className="flex justify-between text-sm text-gray-600">
                <p>{cart.length} dona mahsulot narxi</p>
                <p>
                  {cart
                    .reduce((acc, item) => acc + item.product.price, 0)
                    .toLocaleString("ru")}{" "}
                  so'm
                </p>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <p>Yetkazib berish</p>
                <p>30 000 so'm</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <p>Jami</p>
                <p>
                  {Number(
                    cart.reduce((acc, item) => acc + item.product.price, 0) +
                      Number(30000)
                  ).toLocaleString("ru")}{" "}
                  so'm
                </p>
              </div>
              <input
                type="text"
                placeholder="Promokodni kiriting"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

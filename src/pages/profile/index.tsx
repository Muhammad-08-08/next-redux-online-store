import { Switch } from "@headlessui/react";
import { FiBox, FiClock, FiCreditCard, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/Auth-slice";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { RootState } from "@/redux/store";

type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
};

type OrderType = {
  id: number;
  customerId: number;
  totalPrice: number;
  status: "pending" | "processing" | "delivered" | "cancelled";
  createdAt: string;
  items: OrderItem[];
};

const ProfilePage = () => {
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const dispatch = useDispatch();
  const [pagelar, setPagelar] = useState("asosiy");
  const [orders, setOrders] = useState<OrderType[]>([]);
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setOrders(response.data.items);
      });
    axios
      .get(`https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setOrders(response.data.items);
      });
  }, []);
  const name = useSelector((state: RootState) => state.login.user?.name);
  const id = useSelector((state: RootState) => state.login.user?.id);
  const phone = useSelector((state: RootState) => state.login.user?.phone);
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-6 min-h-screen container mx-auto">
        {/* bosh */}
        <div className="lg:col-span-1 rounded-2xl shadow-md p-6 space-y-8">
          <div
            onClick={() => {
              setPagelar("asosiy");
            }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
              {name?.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-xs text-gray-600">{phone || "kiritilmagan"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer">
              <FiCreditCard /> Mening to'lovlarim
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer">
              <FiClock /> To'lov tarixi
            </div>
            <div
              onClick={() => {
                setPagelar("buyurtmalar");
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer"
            >
              <FiBox /> Onlayn buyurtmalar
            </div>
            <Link href={"/"}>
              <div
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition cursor-pointer"
              >
                <FiLogOut /> Chiqish
              </div>
            </Link>
          </div>
        </div>

        {pagelar === "asosiy" && (
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="font-semibold text-ulg mb-1">
                  Shaxsiy ma'lumotlar
                </h3>
                <p className="text-gray-800">{name}</p>
                <p>ID: {id}</p>
                <p className="text-gray-500 text-sm">Telefon: {phone || "kiritilmagan"}</p>
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
        )}
        {pagelar === "buyurtmalar" && (
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Buyurtmalar</h1>
            {orders.length === 0 ? (
              <p className="text-gray-500">Buyurtmalar mavjud emas.</p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {orders.map((order) => (
                  <Card
                    key={order.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition"
                  >
                    <CardContent className="p-5 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">
                            Buyurtma ID:{" "}
                            <span className="font-semibold">{order.id}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Status:{" "}
                            <span className="capitalize font-medium text-yellow-600">
                              {order.status}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Sana:{" "}
                            <span className="font-medium">
                              {new Date(order.createdAt).toLocaleString()}
                            </span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">
                            {Number(30000 + order.totalPrice).toLocaleString(
                              "ru"
                            )}{" "}
                            so'm
                          </p>
                        </div>
                      </div>

                      <div className="border-t pt-3 space-y-2">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between text-sm border-b pb-1 last:border-none"
                          >
                            <span className="text-gray-600">
                              Mahsulot ID: {item.productId}
                            </span>
                            <span className="text-gray-600">
                              {item.quantity} dona
                            </span>
                            <span className="text-gray-600">
                              {item.price.toLocaleString()} so'm
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

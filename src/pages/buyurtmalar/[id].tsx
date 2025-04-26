import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { FiBox, FiClock, FiCreditCard, FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { logout } from "@/redux/Auth-slice";

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

function Buyurtlamar() {
    const router = useRouter();
    const { id } = router.query;
    const accessToken = useSelector((state: RootState) => state.login.accessToken);
    const [orders, setOrders] = useState<OrderType[]>([]);

    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get(`https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&customerId=491`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((response) => {
                console.log(response.data.items);
                setOrders(response.data.items);
            });
    }, [id]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
            <div className="lg:col-span-1 rounded-2xl shadow-md p-6 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                        M
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Muhammad</p>
                        <p className="text-xs text-gray-600">+998773058208</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer">
                        <FiCreditCard /> Mening to'lovlarim
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer">
                        <FiClock /> To'lov tarixi
                    </div>
                    <Link href={`/buyurtmalar/491`} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition cursor-pointer">
                        <FiBox /> Onlayn buyurtmalar
                    </Link>
                    <div
                        onClick={() => dispatch(logout())}
                        className="flex items-center gap-2 text-red-500 hover:text-red-600 transition cursor-pointer"
                    >
                        <FiLogOut /> Chiqish
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">Buyurtmalar</h1>
                {orders.length === 0 ? (
                    <p className="text-gray-500">Buyurtmalar mavjud emas.</p>
                ) : (
                    orders.map((order) => (
                        <Card key={order.id} className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition">
                            <CardContent className="p-5 space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-500">
                                            Buyurtma ID: <span className="font-semibold">{order.id}</span>
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
                                            {order.totalPrice.toLocaleString()} so'm
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t pt-3 space-y-2">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm border-b pb-1 last:border-none">
                                            <span className="text-gray-600">Mahsulot ID: {item.productId}</span>
                                            <span className="text-gray-600">{item.quantity} dona</span>
                                            <span className="text-gray-600">{item.price.toLocaleString()} so'm</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>

    );
}

export default Buyurtlamar;

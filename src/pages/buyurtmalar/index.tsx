import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";

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

    useEffect(() => {
        axios
            .get(`https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&customerId=${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((response) => {
                console.log(response.data.items);
                setOrders(response.data.items);
            });
    }, [id]);

    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Buyurtmalar</h1>
            {orders.map((order) => (
                <Card key={order.id} className="bg-white shadow-md rounded-2xl border border-gray-200">
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <p className="text-sm text-gray-500">Buyurtma ID: <span className="font-medium">{order.id}</span></p>
                                <p className="text-sm text-gray-500">Status: <span className="capitalize font-medium text-yellow-600">{order.status}</span></p>
                                <p className="text-sm text-gray-500">Sana: <span className="font-medium">{new Date(order.createdAt).toLocaleString()}</span></p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-green-600">{order.totalPrice.toLocaleString()} so'm</p>
                            </div>
                        </div>
                        <div className="mt-4 border-t pt-2">
                            {order.items.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm py-1 border-b last:border-none">
                                    <div>Mahsulot ID: {item.productId}</div>
                                    <div>{item.quantity} dona</div>
                                    <div>{item.price.toLocaleString()} so'm</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Buyurtlamar;

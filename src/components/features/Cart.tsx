import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CgShoppingCart } from "react-icons/cg";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function Cart() {
    const cart = useSelector((state: RootState) => state.cart.items);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition cursor-pointer relative">
                    <CgShoppingCart className="w-6 h-6" />
                    {cart.length > 0 && (
                        <span className="absolute top-0 right-0 text-[10px] bg-amber-500 text-white rounded-full px-1">
                            {cart.length}
                        </span>
                    )}
                    <p className="text-sm mt-1">Savatcha</p>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-lg sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Savatcha</DialogTitle>
                    <DialogDescription>Quyidagi mahsulotlar savatchangizda mavjud:</DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500">Savatcha bo'sh</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex gap-4 border-b pb-3">
                                <img
                                    src={item.product.imageUrl}
                                    alt={item.product.name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <h2 className="font-medium">{item.product.name}</h2>
                                    <p className="text-sm text-gray-600">${item.product.price}</p>
                                    <p className="text-sm text-gray-600">{item.qty} ta</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button variant="outline">Yopish</Button>
                        </DialogClose>
                        <Button>Sotib olish</Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default Cart;

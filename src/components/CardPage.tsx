import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { PiShoppingCartDuotone } from "react-icons/pi";
import Link from "next/link";
import { CardPageType } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cart-slice";
import { isLiked } from "@/redux/liked-slice";
import { Toaster } from "react-hot-toast";
import { RootState } from "@/redux/store";

function CardPage({ items }: CardPageType) {
  const dispatch = useDispatch();
  const isLikeds = useSelector((state: RootState) => state.isLiked);
  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item) => {
          const like = isLikeds.some((i) => i.id === item.id);
          return (
            <Link key={item.id} href={`/product/${item.id}`}>
              <Card className="w-full h-[520px] shadow-lg rounded-lg relative">
                <div className="relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={0}
                    height={0}
                    className="w-full h-[30vh] object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(isLiked(item));
                    }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
                  >
                    <Heart
                      className={`text-red-500 ${
                        like ? "text-pink-500 fill-pink-500" : "text-gray-400"
                      }`}
                      size={20}
                    />
                  </button>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold truncate">
                    {item.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-lg font-bold text-green-600">
                    ${item.price}
                  </p>

                  <p className="text-gray-700 truncate">{item.description}</p>

                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addToCart(item));
                    }}
                    className="w-full flex items-center gap-2 cursor-pointer"
                  >
                    <PiShoppingCartDuotone size={18} /> Savatchaga qo'shish
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CardPage;

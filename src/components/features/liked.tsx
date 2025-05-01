import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { isLiked } from "@/redux/liked-slice";
import { Heart, Trash } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function Liked() {
  const liked = useSelector((state: RootState) => state.isLiked);
  const dispatch = useDispatch();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition cursor-pointer relative">
          <Heart className="w-6 h-6" />
          {liked.length > 0 && (
            <span className="absolute top-0 right-0 text-[10px] bg-pink-500 text-white rounded-full px-1">
              {liked.length}
            </span>
          )}
          <p className="text-sm mt-1">Yoqtirganlar</p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Yoqtirgan mahsulotlar</DialogTitle>
          {liked.length > 0 && (
            <DialogDescription>
              Siz yoqtirgan mahsulotlar ro'yxati:
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {liked.length === 0 ? (
            <p className="text-center text-gray-500">
              Hozircha hech narsa yoqtirilmagan
            </p>
          ) : (
            liked.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      Narxi: ${item.price}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => dispatch(isLiked(item))}
                  className="p-2 rounded-full hover:bg-gray-100 cursor-pointer border"
                >
                  <Heart
                    className={`transition h-6 w-6 ${
                      liked.some((i) => i.id === item.id)
                        ? "text-pink-500 fill-pink-500"
                        : "text-gray-400"
                    }`}
                  />
                </Button>
              </div>
            ))
          )}
        </div>

        {liked.length > 0 && (
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Yopish</Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Liked;

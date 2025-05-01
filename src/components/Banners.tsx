import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BannerType } from "@/types/types";

function Banners() {
  const [banners, setBanners] = useState<BannerType[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/banners").then((res) => {
      setBanners(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto w-full mb-10 border-2 rounded-lg">
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {banners.map((item) => (
              <CarouselItem key={item.id} className="relative h-[550px]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-fill rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom placement for navigation buttons */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md" />
        </Carousel>
      </div>
    </div>
  );
}

export default Banners;

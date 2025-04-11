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
        <div className="w-full max-w-7xl mx-auto py-4">
            <Carousel>
                <CarouselContent>
                    {banners.map((item) => (
                        <CarouselItem key={item.id} className="relative h-[550px]">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Banners;

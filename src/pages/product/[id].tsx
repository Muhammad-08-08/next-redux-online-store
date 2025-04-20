import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    };
};

export async function getServerSideProps({ req, params }: { req: string, params: { id: number } }) {
    const res = await fetch(`https://nt.softly.uz/api/front/products/${params.id}`);
    const data = await res.json();
    return { props: { data } };
}


export default function ProductPage({ data }: Props) {
    return (
        <div className="container px-10">
            <div className="flex justify-center items-center p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 w-full mx-auto rounded-xl bg-white">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src={data.imageUrl}
                            alt={data.name}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900">{data.name}</h2>
                        <p className="text-gray-700 text-md">{data.description}</p>
                        <p className="text-2xl font-semibold text-green-600">${data.price}</p>

                        <Button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition">
                            {"Savatga Qo'shish"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

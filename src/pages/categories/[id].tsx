import CardPage from "@/components/CardPage";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ProductType } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CategoriesPage() {
    const [categoriesPage, setCategoriesPage] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const { id } = router.query;
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);


    useEffect(() => {
        setLoading(true)
        axios.get(`https://nt.softly.uz/api/front/products`, {
            params: {
                categoryId: id,
                page,
                limit,
            },
        }).then((response) => {
            console.log(response.data);
            setCategoriesPage(response.data);
        }).catch(() => {
            toast.error("Xatolik")
        }).finally(() => {
            setLoading(false)
        })
    }, [id, page]);

    if (loading || !categoriesPage) {
        return <p className="text-center font-bold ">Loading...</p>
    }
    const totalPages = Math.ceil(categoriesPage?.totalItems / limit);

    return (
        <div className="container mx-auto py-6">
            {categoriesPage && <CardPage items={categoriesPage.items} />}

            <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalPages)].map((_, index) => {
                    const index_number = index + 1;
                    return <Link href={`/categories/${id}?page=${index_number}&limit=${limit}`} key={index}>
                        <Button className="cursor-pointer" variant={index_number === Number(page) ? "default" : "outline"}>{index_number}</Button>
                    </Link>
                }
                )}
            </div>
        </div>
    );
}

export default CategoriesPage;

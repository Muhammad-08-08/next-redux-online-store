import CardPage from "@/components/CardPage";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ProductType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CategoriesPage() {
    const [categoriesPage, setCategoriesPage] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);
    const limit = 10;
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;
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

    const totalItems = categoriesPage ? categoriesPage.totalItems : 0;
    const totalPages = Math.ceil(totalItems / limit);

    if (loading) {
        return <p className="text-center font-bold ">Loading...</p>
    }

    return (
        <div className="container mx-auto py-6">
            {categoriesPage && <CardPage items={categoriesPage.items} />}

            <div className="flex justify-center mt-6">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem onClick={() => {
                            if (page > 1) {
                                setPage(page - 1)
                            }
                        }}>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">{page}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem onClick={() => {
                            if (totalPages !== page) {
                                setPage(page + 1)
                            }
                        }}>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

export default CategoriesPage;

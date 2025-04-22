import CardPage from "@/components/CardPage";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ProductType } from "@/types/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CategoriesPage() {
    const [categoriesPage, setCategoriesPage] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const limit = 10;
    const router = useRouter();
    const { id } = router.query;
    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const page = pageParam ? parseInt(pageParam) : 1;


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

    const handlePageChange = (newPage: number) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, page: newPage },
        });
    };


    return (
        <div className="container mx-auto py-6">
            {categoriesPage && <CardPage items={categoriesPage.items} />}

            <div className="flex justify-center mt-6">
                <Pagination>
                    <PaginationContent>
                        {page > 1 && <PaginationItem onClick={() => {
                            if (page > 1) {
                                handlePageChange(page - 1)
                            }
                        }}>
                            <PaginationPrevious href="#" />
                        </PaginationItem>}
                        <PaginationItem>
                            <PaginationLink href="#">{page}</PaginationLink>
                        </PaginationItem>
                        {page !== totalPages && <PaginationItem onClick={() => {
                            if (totalPages !== page) {
                                handlePageChange(page + 1)
                            }
                        }}>
                            <PaginationNext href="#" />
                        </PaginationItem>}
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

export default CategoriesPage;

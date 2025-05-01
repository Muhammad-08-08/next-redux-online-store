import CardPage from "@/components/CardPage";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

export async function getServerSideProps(orgs: GetServerSidePropsContext) {

    const res = await axios.get("https://nt.softly.uz/api/front/products", {
        params: {
            page: orgs.query.page,
            limit: orgs.query.limit,
            categoryId: orgs.params?.id
        }
    })
    return {
        props: {
            data: {
                categoriesPage: res.data,
                limit: Number(orgs.query.limit),
                page: Number(orgs.query.page),
                categoryId: orgs.params?.id
            }
        }
    }
}

type categoryTypes = {
    data: {
        categoriesPage: ProductType,
        limit: number
        page: number
        categoryId: number
    }
}

function CategoriesPage({ data }: categoryTypes) {

    if (!data.categoriesPage) {
        return <p className="text-center font-bold ">Loading...</p>
    }
    const totalPages = data.categoriesPage && data.limit
        ? Math.ceil((data.categoriesPage.totalItems || 0) / data.limit)
        : 0;


    return (
        <div className="container mx-auto py-6">
            {data.categoriesPage && <CardPage items={data.categoriesPage.items} />}

            <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalPages)].map((_, index) => {
                    const index_number = index + 1;
                    return <Link href={`/categories/${data.categoryId}?page=${index_number}&limit=${data.limit}`} key={index}>
                        <Button className="cursor-pointer" variant={index_number === Number(data.page) ? "default" : "outline"}>{index_number}</Button>
                    </Link>
                }
                )}
            </div>
        </div>
    );
}

export default CategoriesPage;

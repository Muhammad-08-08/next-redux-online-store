import CardPage from "@/components/CardPage"
import { ProductType } from "@/types/types"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function CategoriesPage() {
    const [categoriesPage, setCategoriesPage] = useState<ProductType>()
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        axios.get(`https://nt.softly.uz/api/front/products`, {
            params: {
                categoryId: id,
                page: 1,
                limit: 10,
            }
        }).then(response => {
            console.log(response.data);
            setCategoriesPage(response.data)
        })
    }, [id])

    return (
        <div className="container mx-auto">
            {categoriesPage && <CardPage items={categoriesPage.items} />}
        </div>
    )
}

export default CategoriesPage
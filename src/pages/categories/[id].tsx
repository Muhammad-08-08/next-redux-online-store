import CardPage from "@/components/CardPage"
import { ProductType } from "@/types/types"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function CategoriesPage() {
    const [categoriesPage, setCategoriesPage] = useState<ProductType>()

    const { id } = useParams()
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
        <div>
            {categoriesPage && <CardPage items={categoriesPage.items} />}
        </div>
    )
}

export default CategoriesPage
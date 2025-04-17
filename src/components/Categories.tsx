import { CategoriesType } from "@/types/types"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


function Categories() {
    const [categories, setCategories] = useState<CategoriesType>([])
    useEffect(() => {
        axios.get("https://nt.softly.uz/api/front/categories").then((response) => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="container mx-auto flex gap-7">{categories.map(item => {
            <Link href={"/bizhaqimizda"}>
                biz haqimizda
            </Link>
            return <div key={item.id}>
                <Link href={`/categories/${item.id}`}> <p className="text-lg py-4 cursor-pointer select-none">{item.name}</p></Link>
            </div>
        })}</div>
    )
}

export default Categories
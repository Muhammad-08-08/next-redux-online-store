import { ProductType } from "@/types/types";
import axios from "axios"
import { useState } from "react";
import CardPage from "./CardPage";

function Products() {
    const [products, setProducts] = useState<ProductType>()
    axios.get("https://nt.softly.uz/api/front/products?page=1&limit=10").then(response => {
        console.log(response.data);
        setProducts(response.data)
    })
    return (
        <div className="container mx-auto">{products && <CardPage items={products.items} />}</div>
    )
}

export default Products
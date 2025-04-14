// import axios from "axios"
// import Image from "next/image"
// import { useParams } from "next/navigation"

// function ProductPage() {
//     const { id } = useParams()

//     axios.get(`https://nt.softly.uz/api/front/product/${id}`)

//     return
//     return (
//         <div className="container px-10">
//             <div className="flex justify-center items-center min-h-screen p-6">
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 w-full mx-auto rounded-xl bg-white">
//                     <div className="w-full md:w-1/2 flex justify-center">
//                         <Image
//                             src={productPage.imageUrl}
//                             alt={productPage.name}
//                             width={400}
//                             height={300}
//                             className="rounded-lg object-cover"
//                         />
//                     </div>

//                     <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
//                         <h2 className="text-3xl font-bold text-gray-900">{productPage.name}</h2>
//                         <p className="text-gray-700 text-md">{productPage.description}</p>
//                         <p className="text-2xl font-semibold text-green-600">
//                             ${productPage.price}
//                         </p>

//                         <Button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition">
//                             {"Savatga Qo'shish"}
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             <div className="mx-auto">
//                 <Products />
//             </div>
//         </div>
//     )
// }

// export default ProductPage

"use client";

import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
// import { UserContext } from "@/app/state/user-context";

export default function Category({ params }) {
    const router = useRouter()
    // const {user}=useContext(UserContext)
    const [products, setProducts] = useState([]);
    const categoryId = params.id;

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch(`http://localhost:3000/api/products?category_id=${categoryId}`, { next: { revalidate: 30 } });
                const { data } = await res.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        }
        getProducts();
    }, [categoryId]);

    return (
        <div className="min-h-screen bg-gray-100"style={{ backgroundImage: `url('https://i.pinimg.com/originals/cf/57/7d/cf577d963b77a87e3a8f7f9c67f8ee40.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className=" bg-gray-500/70 text-black  text-center font-bold  py-4 items-center font-serif relative">
                <h1 className="text-2xl font-bold ">Products in Category {categoryId}</h1>
            </header>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-3 inline-block flex items-center justify-center mx-auto ">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white-100 rounded-3xl overflow-hidden shadow-md flex flex-col flex items-center justify-center">
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-half h-52  object-center flex items-center justify-center p-4 "
                                style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} // Center the image
                            />
                            <div className="p-4 text-center text-bold">
                                <h2 className="text-lg font-bold mb-2 text-black">{product.name}</h2>
                                <p className="text-gray-600 font-italic mb-2 text-indigo-800">{product.description}</p>
                                <p className="text-black font-semibold">Nu. {product.price}</p>
                                <button className="mt-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={()=>router.push("/pages/makeOrder")}
                                >Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

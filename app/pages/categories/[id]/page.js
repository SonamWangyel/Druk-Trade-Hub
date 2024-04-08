


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Category({ params }) {
    const router = useRouter()
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
        <div className="min-h-screen bg-gray-100"style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/table-blur-background-wooden-counter-blur-bokeh-light-background-brown-wood-table-top-shelf-food-retail-shop-store-product-display-backdrop-banner-mockup-template_7190-3476.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className="bg-violet-100 text-black  text-center py-4 font-times new roman relative bg-indigo-300">
                <h1 className="text-2xl font-bold ">Products in Category {categoryId}</h1>
            </header>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-violet-500/30 rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center inline-block">
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-half h-52 object-cover object-center"
                                style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} // Center the image
                            />
                            <div className="p-4 text-center text-bold">
                                <h2 className="text-lg font-bold mb-2 text-black">{product.name}</h2>
                                <p className="text-gray-600 font-italic mb-2 text-indigo-800">{product.description}</p>
                                <p className="text-green-500 font-semibold">Nu. {product.price}</p>
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

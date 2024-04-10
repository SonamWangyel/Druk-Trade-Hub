"use client";
import { set } from "date-fns";
import React, { useState,useEffect } from "react";

export default function getProducts({params}){
    const [products,setProducts]= useState([]);
    
    useEffect(()=>{

        async function getProductsDetails(){
            const productName = params.name
               const response = await fetch(`http://localhost:3000/api/products/${productName}`)
                const {data}= await response.json()
                setProducts(data)
        }
        getProductsDetails()
    },[])

    return(
        <div className="text-white ">
            {products.map((product)=>{
                return (
                    <div className="text-white"
                    key={product.id}>
                     <p className="text-white">{product.name}</p>   
                     <p className="text-white">{product.seller_id}</p>   
                     <p className="text-white">{product.price}</p>   
                     <p className="text-white">{product.description}</p>   
                     
                     <img className="h-full w-full"
                     src={product.image_url}>
                     </img>  
                    </div>
                )
            })}
            
        </div>
    )
}
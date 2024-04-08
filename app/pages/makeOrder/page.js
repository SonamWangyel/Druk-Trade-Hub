


"use client";


import { useEffect, useState } from "react";

export default function MakeOrder() {
    const [buyerId ,setBuyerId]=useState();
    const[productId,setProductId]=useState();
    const [quantity,setQuantity]=useState();
    const [totalPrice,setTotalPrice]=useState();
    const  [status,setStatus]=useState();


        async function MakeOrder() {
            try {
                const res = await fetch('/api/sellers/orders',{
                    method:'POST',
                    body: JSON.stringify({
                        buyerId,
                        productId,
                        quantity,
                        totalPrice,
                        status
                    })
                })
                const { data } = await res.json();
                setBuyerId(buyerId),
                setProductId(productId),
                setQuantity(quantity),
                setTotalPrice(totalPrice),
                setStatus(status)

            } catch (error) {
                console.error(error);
            }
        }
            return(
                <div>
                    <div>
                        <input className="bg-white text-black bg-hover-sky-300"
                        type= "number"
                        placeholder="enter customerId"
                        onChange={(e)=>setBuyerId(e.target.value)}
                        value={buyerId}
                          >
                        </input>

                        <input className=""
                        type= "number"
                        placeholder="enter productId"
                        onChange={(e)=>setProductId(e.target.value)}
                        value={productId}
                          >
                        </input>

                        <input className=""
                        type= "number"
                        placeholder="enter quantity"
                        onChange={(e)=>setQuantity(e.target.value)}
                        value={quantity}
                          >
                        </input>

                        <input className=""
                        type= "number"
                        placeholder="enter totalprice"
                        onChange={(e)=>setTotalPrice(e.target.value)}
                        value={totalPrice}
                          >
                        </input>

                        <input className=""
                        type= "text"
                        placeholder="enter status"
                        onChange={(e)=>setStatus(e.target.value)}
                        value={status}
                          >
                        </input>
                         <button onClick={MakeOrder}
                         className="">Order </button>
                    </div>
                </div>
            )
    }   
    

    
"use client";

import {  useState } from "react";

export default function MakeOrder() {
    const [buyerId, setBuyerId] = useState();
    const [productId, setProductId] = useState();
    const [quantity, setQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [status, setStatus] = useState();
    const [paymentMethod,setPaymentMethod]= useState();

    async function makeOrder() {
        try {
            const res = await fetch('/api/sellers/orders', {
                method: 'POST',
                body: JSON.stringify({
                    buyerId,
                    productId,
                    quantity,
                    totalPrice,
                    status,
                    paymentMethod

                })
            });
            const { data } = await res.json();
            console.log(data); 
            setBuyerId(buyerId);
            setProductId(productId);
            setQuantity(quantity);
            setTotalPrice(totalPrice)
            setStatus(status);
            setPaymentMethod(paymentMethod);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5" style={{ backgroundImage: `url('https://i.pinimg.com/originals/cf/57/7d/cf577d963b77a87e3a8f7f9c67f8ee40.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form style={{ 
                maxWidth: '400px', 
                width: '100%', 
                padding: '20px', 
                border: '1px solid #ccc', 
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
            }}>
        

                <input
                    type="number"
                    placeholder="Enter customer ID"
                    onChange={(e) => setBuyerId(e.target.value)}
                    value={buyerId}
                    required
                    style={{ 
                        display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black', 
                    }}
                />

                 <input
                    type="number"
                    placeholder="Enter product ID"
                    onChange={(e) => setProductId(e.target.value)}
                    value={productId}
                    required
                    style={{ 
                        display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black',
                    }}
                />
            
                 <input
                    type="number"
                    placeholder="Enter quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    required
                    style={{ display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black',
                }}

                />

                <input
                    type="number"
                    placeholder="Enter total price"
                    onChange={(e) => setTotalPrice(e.target.value)}
                    value={totalPrice}
                    required
                    style={{ display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black',
                }}

                />

                <input
                    type="text"
                    placeholder="Enter status"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    required
                    style={{ display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black',
                }} 

                />

                    <input
                    type="text"
                    placeholder="Enter payment method"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value={paymentMethod}
                    required
                    style={{ display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        padding: '10px', 
                        fontSize: '16px',
                        color: 'black'
                    
                    }} 
                  
                  
                  />

                <button type="button" onClick={makeOrder} style={{ 
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    border: 'none', 
                    cursor: 'pointer', 
                    transition: 'background-color 0.3s ease', 
                    width: '100%', 
                    padding: '10px', 
                    fontSize: '16px' 

                }}>
                    Order
                </button>
            </form>
        </div>
    );
}

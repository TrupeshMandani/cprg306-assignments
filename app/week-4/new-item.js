'use client'
import { useState } from "react"

export default function NewItem(){
    const [quantity, setQuantity] = useState(1)

    const increment= ()=> {
        
        setQuantity(quantity + 1)
    };

    const decrement =()=> {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    };
    return (
        <div className="bg-white text-black w-48 p-4 rounded shadow mx-auto my-20">


            <div className="flex justify-between">
                <span className="my-auto w-12 text-center">{quantity}</span>
                <button onClick={increment} disabled={quantity===20} className="bg-green-500 disabled:bg-green-300 text-white px-4 py-2 rounded-md hover:bg-green-700">+</button>
                <button onClick={decrement} disabled={quantity===1} className="bg-red-500 ho disabled:bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-700">-</button>
            </div>
        </div>


    );
};
/**
 * The NewItem component in React allows users to increment and decrement a quantity value with
 * buttons.
 * @returns The NewItem component is being returned. It is a functional component in React that
 * displays a quantity input with increment and decrement buttons. The quantity state is managed using
 * the useState hook. The component returns a div with quantity display, increment button, and
 * decrement button, all styled with Tailwind CSS classes.
 */

"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="bg-white text-black w-48 p-4 rounded shadow mx-auto my-20">
      <div className="flex justify-between">
        <span className="my-auto w-12 text-center">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-green-500 disabled:bg-green-300 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-red-500 ho disabled:bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          -
        </button>
      </div>
    </div>
  );
}

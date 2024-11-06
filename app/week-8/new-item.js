"use client";
import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  // State Variables
  const [name, setName] = useState(""); // Initial value is an empty string
  const [quantity, setQuantity] = useState(0); // Initial quantity is 0
  const [category, setCategory] = useState("Produce"); // Default to "Produce"

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const item = {
      id: Math.random().toString(36).substring(2, 9), // Generate a random ID
      name,
      quantity,
      category,
    }; // Create item object

    onAddItem(item); // Call the onAddItem prop with the new item

    // Reset state variables to initial values
    setName("");
    setQuantity(0); // Reset quantity to 0
    setCategory("Produce"); // Reset category to "Produce"
  };

  // Increment function
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity by 1
  };

  // Decrement function
  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Decrease quantity by 1, ensuring it doesn't go below 0
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-slate-700 rounded shadow-md max-w-md mx-auto"
    >
      {/* Name Field */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update state on change
          required // Prevent submission without a name
          className="w-full p-2 border bg-slate-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        {/* Quantity Field with Increment/Decrement Buttons */}
        <div className="bg-white text-black w-48 p-2 rounded shadow">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={decrement}
              className="bg-red-500 disabled:bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              -
            </button>
            <span className="my-auto w-12 text-center">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              className="bg-green-500 disabled:bg-green-300 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              +
            </button>
          </div>
        </div>

        {/* Category Field */}
        <div className="mb-4 flex items-center">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Update category on change
            className="h-11 p-2 border bg-slate-500 border-gray-300 rounded"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 my-4"
      >
        Submit
      </button>
    </form>
  );
};

export default NewItem;

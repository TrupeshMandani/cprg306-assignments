"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = () => {
    const itemsCopy = [...items]; // Create a copy of items for sorting

    if (sortBy === "name") {
      return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "grouped") {
      const grouped = itemsCopy.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});

      // Sort each category's items and then return as a flat array
      return Object.keys(grouped)
        .sort() // Sort categories alphabetically
        .flatMap((category) =>
          grouped[category].sort((a, b) => a.name.localeCompare(b.name))
        );
    }
    return items; // Return original items if no valid sort option
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 text-black ${
            sortBy === "name" ? "bg-gray-300" : "bg-gray-100"
          } capitalize`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`mr-2 px-4 py-2 text-black ${
            sortBy === "category" ? "bg-gray-300" : "bg-gray-100"
          } capitalize`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 text-black ${
            sortBy === "grouped" ? "bg-gray-300" : "bg-gray-100"
          } capitalize`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        // Render grouped items by category
        Object.entries(
          items.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        )
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="capitalize font-bold">{category}</h3>
              <ul>
                {items
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        // Render sorted list
        <ul>
          {sortedItems().map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

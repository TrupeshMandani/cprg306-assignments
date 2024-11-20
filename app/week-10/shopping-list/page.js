"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-hooks";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]); // State to store items
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items from the database
  const loadItems = async () => {
    if (user?.uid) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems || []); // Safely handle empty or null responses
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
  };

  // Fetch items when the component mounts or when the user changes
  useEffect(() => {
    loadItems();
  }, [user]);

  // Handle adding a new item
  const handleAddItem = async (item) => {
    if (user?.uid) {
      try {
        const newItemId = await addItem(user.uid, item);
        setItems((prevItems) => [...prevItems, { id: newItemId, ...item }]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  // Handle selecting an item
  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();
    console.log("Selected item name:", cleanedName);
    setSelectedItemName(cleanedName);
  };

  // Render a login prompt if the user is not authenticated
  if (!user) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
        <p className="text-xl">Please login to view this page</p>
      </main>
    );
  }

  // Render the main shopping list and meal ideas
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <div className="flex gap-8">
        {/* New Item Form and Item List */}
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas Section */}
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

// week-9/shopping-list/page.js
"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-hooks";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect to landing page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to the landing page
    }
  }, [user, router]);

  // If user is not logged in, don't render the component
  if (!user) return null;

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();
    console.log("Selected item name:", cleanedName);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <div className="flex gap-8">
        <div className="w-1/2 bg-slate-800 p-6 rounded-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2 bg-slate-800 p-6 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

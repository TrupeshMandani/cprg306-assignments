"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";

import itemData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemData);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Page;

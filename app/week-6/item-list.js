"use client";

import React from "react";
import { useState } from "react";

import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  // create a function to sort item array bases on sortBy state variable
  const sortItem = (items, sortBy) => {
    return (a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    };
  };

  return (
    <div>
      Sort By:
      <button
        className=" ml-3 min-w-max bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSortBy("name")}
      >
        name
      </button>
      <button
        className=" min-w-max bg-slate-600 ml-3 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded "
        onClick={() => setSortBy("category")}
      >
        {" "}
        category
      </button>
      <ul>
        {items.sort(sortItem(items, sortBy)).map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

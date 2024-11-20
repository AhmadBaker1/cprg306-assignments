'use client';

import { useState } from 'react';
import Item from './item';



export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");


  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <>
    <div>
        <button
          style={{ backgroundColor: sortBy === "name" ? "orange" : "black" }}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          style={{ backgroundColor: sortBy === "category" ? "orange" : "black", marginLeft: "10px" }}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          quantity={item.quantity} 
          category={item.category}
          onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </>
  );
}

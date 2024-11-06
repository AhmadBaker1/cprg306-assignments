'use client';

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
        .split(',')[0]
        .replace(/[^\w\s]/gi, '')
        .trim();
        setSelectedItemName(cleanedItemName);
    }

    return (
        <main className="bg-slate-950">
            <div className="w-1/3 space-y-4">
                <h1 className="text-3xl font-bold text-white mb-4">
                    Shopping List
                </h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/> 
            </div>
            <div className="w-2/3 bg-slate-800 p-4 rounded-md">
                <h2 className="text-3xl font-bold text-white mb-4">Meal Ideas</h2>
                {selectedItemName && (
                    <MealIdeas ingredient={selectedItemName}/>
                )}
            </div>           
        </main>
    );
}
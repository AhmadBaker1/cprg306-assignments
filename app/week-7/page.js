'use client';

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="bg-slate-950">
            <h1 className="text-3xl font-bold text-white-800 mb-8 pt-3 px-2">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>            
        </main>
    );
}
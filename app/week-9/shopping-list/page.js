'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    // Protect the page by redirecting to the landing page if not logged in
    useEffect(() => {
        if (!user) {
            router.push("/week-9");  
        }
    }, [user, router]);

    // Handle adding new items
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    // Handle selecting an item
    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(',')[0]
            .replace(/[^\w\s]/gi, '')
            .trim();
        setSelectedItemName(cleanedItemName);
    }

    // Render the login button or shopping list page based on login state
    return (
        <main className="bg-slate-950 p-8">
            {user ? (
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 space-y-4">
                        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
                        <button onClick={firebaseSignOut} className="bg-red-600 text-white p-2 rounded">Logout</button>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-full md:w-2/3 bg-slate-800 p-4 rounded-md">
                        <h2 className="text-3xl font-bold text-white mb-4">Meal Ideas</h2>
                        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to the Shopping List App</h1>
                    <button onClick={gitHubSignIn} className="bg-blue-600 text-white p-4 rounded">Login with GitHub</button>
                </div>
            )}
        </main>
    );
}

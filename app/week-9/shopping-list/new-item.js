'use client';

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            quantity,
            category,
        };

        onAddItem(newItem);

        

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function NewItem({ onAddItem }) { 

     }


    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="text-black bg-slate-900 p-4 mt-3 shadow-lg space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Item name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
    
                <div className="flex items-center">
                    <div className="flex items-center bg-white p-2 rounded-md shadow-md">
                        <span className="text-l pr-10 text-black">{quantity}</span>
                        <button
                            type="button"
                            onClick={decrement}
                            className={`w-7 h-5 flex items-center justify-center rounded-sm text-white font-bold mr-3
                            ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-400 hover:bg-gray-600'}`}
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <button
                            type="button"
                            onClick={increment}
                            className={`w-7 h-5 flex items-center justify-center rounded-sm text-white font-bold 
                            ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'}`}
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>

                    <div className="ml-28">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 block p-2 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled className="text-gray-400">Category</option>
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
    
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-48 rounded hover:bg-blue-400">
                    +
                </button>
            </form>
        </div>
    );
}
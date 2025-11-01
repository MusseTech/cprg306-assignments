"use client";

import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: crypto.randomUUID(), name, quantity, category };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleIncrement = () => setQuantity(prev => Math.min(20, prev + 1));
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-xl text-black border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Item Name</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="e.g., milk, 4 L"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-base font-medium text-gray-600 mb-2">Quantity (1–20)</label>
                    <div className="mb-2">
                        <span className="text-gray-700 text-base">Current: </span>
                        <span className="text-lg font-semibold text-gray-900">{quantity}</span>
                    </div>
                    <div className="flex items-center space-x-2"> 
                        <button
                            type="button"
                            onClick={handleDecrement}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-lg font-medium"
                        >
                            −
                        </button>
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-base font-medium text-gray-600 mb-6">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white text-base font-semibold rounded-md hover:bg-green-700 transition-colors shadow-md"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewItem;
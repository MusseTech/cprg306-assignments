"use client";

import { useState } from 'react';

// This component now accepts the onAddItem prop
const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: crypto.randomUUID(), // Generate a random ID
            name,
            quantity,
            category,
        };

        // Call the onAddItem function passed from the parent
        onAddItem(newItem);

        // Reset the form
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    // Helper functions for the +/- quantity buttons
    const handleIncrement = () => setQuantity(prev => Math.min(20, prev + 1));
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Item Name</h2>
            
            <form onSubmit={handleSubmit}>
                {/* Item Name Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="e.g., milk, 4 L 🥛"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Quantity Controls */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-600 mb-2">Quantity (1–20)</label>
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            onClick={handleDecrement}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            −
                        </button>
                        <span className="text-xl font-semibold text-gray-900 w-8 text-center">{quantity}</span>
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Category Select */}
                <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-600 mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default NewItem;
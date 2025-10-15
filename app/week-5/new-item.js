"use client";

import React, { useState } from "react";

export default function NewItem() {
    // State variables for the Week 5 assignment
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    // Max/min quantities for the counter
    const maxQuantity = 20;
    const minQuantity = 1;

    // Increment/decrement functions for the counter
    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity));
    };

    // List of categories for the dropdown
    const categories = [
        "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", 
        "Canned Goods", "Dry Goods", "Beverages", "Snacks", 
        "Household", "Other"
    ];

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Stop default form submission

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);
        alert(`Adding Item: Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // Reset form fields after submission
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main className="flex justify-center w-full">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl m-4">
                {/* *** Title Change Applied Here *** The h1 text is changed to "Week 5 — New Item"
                */}
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Week 5 — New Item</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Item Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Item Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="e.g., milk, 4 L 🥛" 
                        />
                    </div>

                    {/* Quantity Section (Week 4 style counter) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Quantity (1-20)
                        </label>
                        <div className="flex items-center mt-1 space-x-2">
                            <span className="text-base font-bold text-gray-700 mr-2">Current:</span> 
                            <span className="text-base font-bold text-gray-700">{quantity}</span>
                            
                            {/* Decrement Button */}
                            <button
                                type="button" 
                                onClick={decrement}
                                disabled={quantity === minQuantity}
                                className={`
                                    px-3 py-1 text-lg font-semibold rounded-md w-10 transition-colors duration-150 
                                    ${quantity === minQuantity 
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }
                                `}
                                aria-label="Decrement quantity"
                            >
                                −
                            </button>
                            
                            {/* Increment Button */}
                            <button
                                type="button" 
                                onClick={increment}
                                disabled={quantity === maxQuantity}
                                className={`
                                    px-3 py-1 text-lg font-semibold rounded-md w-10 transition-colors duration-150 
                                    ${quantity === maxQuantity 
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }
                                `}
                                aria-label="Increment quantity"
                            >
                                +
                            </button>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Allowed range: 1–20</p>
                    </div>

                    {/* Category Field */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button (Green and Smaller) */}
                    <button
                        type="submit"
                        className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        style={{ maxWidth: '120px' }} 
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </main>
    );
}
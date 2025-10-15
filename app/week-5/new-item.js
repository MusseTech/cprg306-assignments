"use client"; 

import React, { useState } from 'react';

const NewItem = () => {
    // 1. Setting up our state variables. Gotta track what the user is doing!
    // Name starts blank, because, well, we haven't named it yet!
    const [name, setName] = useState("");
    
    // Quantity defaults to 1—makes sense for a new item.
    const [quantity, setQuantity] = useState(1); 
    
    // Category defaults to "produce." Everyone loves veggies!
    const [category, setCategory] = useState("produce"); 

    // This array makes our dropdown category list super easy to manage.
    const categories = [
        "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", 
        "Canned Goods", "Dry Goods", "Beverages", "Snacks", 
        "Household", "Other"
    ];

    // The function that runs when they hit 'Add Item'. It's the core logic!
    const handleSubmit = (event) => {
        // Stop the browser from refreshing the page on submit (that's the default behavior)
        event.preventDefault();

        // Package up all the current state values into one neat item object.
        const item = {
            name,
            quantity,
            category,
        };

        // Let's see it in the console, just to confirm it looks right.
        console.log(item);

        // Pop an alert! This confirms to the user what they just added.
        alert(`Adding Item: Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // Reset time! Clear everything out and get ready for the next item.
        setName("");
        setQuantity(1); 
        setCategory("produce"); // Back to the veggie default!
    };
    
    // 2. The Return Statement: What the user actually sees.
    return (
        // I tossed in some simple Tailwind classes to make it look decent—a nice card, centered.
        <main className="flex justify-center w-full">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl m-4">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Time to Add a New Item!</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* The Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Item Name (Required!)
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name} // Shows the current state value
                            onChange={(e) => setName(e.target.value)} // Updates the 'name' state as they type
                            required // Can't submit without this!
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            placeholder="e.g., Organic Bananas"
                        />
                    </div>

                    {/* The Quantity Input */}
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            How Many?
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            min="1" 
                            value={quantity}
                            // Important: Convert to a Number, inputs return strings!
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* The Category Dropdown */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            What Category Does It Belong To?
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        >
                            {/* Loop through our categories array to build the options */}
                            {categories.map((cat) => (
                                <option 
                                    key={cat} 
                                    value={cat.toLowerCase().replace(/\s/g, '-')} // Clean value for backend use
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* The Submit Button: Go time! */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </main>
    );
};

export default NewItem;
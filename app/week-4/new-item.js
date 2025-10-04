"use client";

import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 20;
    const minQuantity = 1;

    // Create increment function
    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
    };

    // Create decrement function
    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity));
    };

    return (
        <div className="p-4 m-4 bg-white rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

            <div className="flex items-center space-x-4">
                <label className="text-lg font-medium text-gray-700 w-24">Quantity:</label>
                
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    {/* Decrement Button */}
                    <button
                        onClick={decrement}
                        disabled={quantity === minQuantity}
                        className={`
                            px-4 py-2 text-xl font-semibold transition-colors duration-150 
                            ${quantity === minQuantity 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                            }
                        `}
                        aria-label="Decrement quantity"
                    >
                        −
                    </button>
                    
                    {/* Quantity Display */}
                    <span className="w-12 text-center text-lg font-bold py-2 bg-gray-50 text-gray-800 border-x border-gray-300">
                        {quantity}
                    </span>

                    {/* Increment Button */}
                    <button
                        onClick={increment}
                        disabled={quantity === maxQuantity}
                        className={`
                            px-4 py-2 text-xl font-semibold transition-colors duration-150 
                            ${quantity === maxQuantity 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                            }
                        `}
                        aria-label="Increment quantity"
                    >
                        +
                    </button>
                </div> 
            </div>
            <p className="mt-2 text-sm text-gray-500">Allowed range: 1–20</p>
        </div>
    );
}
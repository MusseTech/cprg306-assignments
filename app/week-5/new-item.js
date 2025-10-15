"use client";

import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 20;
    const minQuantity = 1;

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity));
    };

    return (
        // Main container for the white card
        // Used a fixed width (w-96) to match the length of the title
        <div className="p-6 bg-white rounded-lg shadow-lg w-96"> 
            
            {/* Quantity Label and Display (in the same row, separated) */}
            <div className="flex items-center mb-6"> {/* Added mb-6 for spacing */}
                <label className="text-xl font-medium text-gray-700">Quantity:</label>
                
                {/* Displaying the quantity number right next to the label */}
                <span className="text-xl font-bold ml-2 text-gray-400">
                    {quantity}
                </span>
            </div>

            {/* Decrement and Increment Buttons (in the same row, separate) */}
            <div className="flex items-center space-x-4 mb-6">
                
                {/* Decrement Button */}
                <button
                    onClick={decrement}
                    disabled={quantity === minQuantity}
                    className={`
                        px-6 py-3 text-2xl font-semibold rounded-lg w-20 transition-colors duration-150 
                        ${quantity === minQuantity 
                            // Disabled style: light gray background, gray text
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            // Active style: light gray background, dark text
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }
                    `}
                    aria-label="Decrement quantity"
                >
                    −
                </button>
                
                {/* Increment Button */}
                <button
                    onClick={increment}
                    disabled={quantity === maxQuantity}
                    className={`
                        px-6 py-3 text-2xl font-semibold rounded-lg w-20 transition-colors duration-150 
                        ${quantity === maxQuantity 
                            // Disabled style remains gray
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            // Active style is blue
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }
                    `}
                    aria-label="Increment quantity"
                >
                    +
                </button>
            </div>
            
            {/* Allowed Range */}
            <p className="mt-2 text-sm text-gray-500">Allowed range: 1–20</p>
        </div>
    );
}
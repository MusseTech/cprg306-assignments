// /app/week-6/item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        // FIX 2: Ensure max-w-lg and mx-auto are present to center the list items
        <li className="p-4 m-4 bg-black rounded-lg shadow-md border border-gray-700 hover:bg-gray-800 max-w-lg mx-auto text-white">
            
            {/* 1. Item Name */}
            <div className="font-bold text-lg">
                {name}
            </div>
            
            {/* 2. Quantity */}
            <div className="text-sm mt-1 text-gray-300"> 
                Quantity: {quantity}
            </div>
            
            {/* 3. Category */}
            <div className="text-sm capitalize text-gray-300">
                Category: {category}
            </div>
        </li>
    );
};

export default Item;
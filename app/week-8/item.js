import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        // FIX 1: Set bg-black, add border, and increase padding (p-6) for size
        <li className="p-6 bg-black rounded-lg shadow-md border border-gray-700 text-white">
            
            <div className="font-bold text-lg">
                {name}
            </div>
            
            {/* FIX 2: Use "Quantity: X" format and larger text-base */}
            <div className="text-base mt-2 text-gray-300"> 
                Quantity: {quantity}
            </div>
            
            {/* FIX 3: Use "Category: Y" format and larger text-base */}
            <div className="text-base capitalize text-gray-300">
                Category: {category}
            </div>
        </li>
    );
};

export default Item;
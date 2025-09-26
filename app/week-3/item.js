import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
    <li className="p-4 bg-gray-800 mb-4 rounded-lg shadow-md max-w-sm hover:bg-gray-700 transition duration-300 cursor-pointer">
        <h3 className="text-xl font-bold text-teal-300">{name}</h3>
        <p className="text-sm text-gray-400 mt-1">
            Quantity: {quantity}
        </p>
        <p className="text-sm text-gray-400">
            Category: {category}
        </p>  
    </li>
    );
    };
    
export default Item;
// /app/week-6/item-list.js

"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; 

const ItemList = () => {
    const [sortBy, setSortBy] = useState("name");

    const getButtonClass = (sortValue) => {
        return `px-4 py-2 font-semibold text-sm rounded-md transition duration-150 ease-in-out ${
            sortBy === sortValue 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
        }`;
    };

    const getSortedItems = () => {
        let itemsToProcess = [...itemsData];
        itemsToProcess.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        return itemsToProcess;
    };
    
    const sortedData = getSortedItems();

    return (
        // FIX 1: Removed max-w-4xl from here. The width is now controlled by the List itself.
        // We add mx-auto to center the whole container.
        <div className="mx-auto p-4"> 
            
            {/* Sorting Buttons */}
            {/* We will rely on the Item component's max-width for alignment */}
            <div className="flex space-x-4 mb-8 items-center justify-start max-w-lg mx-auto"> 
                <span className="text-lg font-medium text-gray-400">Sort By:</span> 
                
                <button
                    onClick={() => setSortBy("name")}
                    className={getButtonClass("name")}
                >
                    Name
                </button>
                
                <button
                    onClick={() => setSortBy("category")}
                    className={getButtonClass("category")}
                >
                    Category
                </button>
            </div>

            {/* Render Simple Sorted List */}
            <ul className="space-y-4">
                {sortedData.map(item => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
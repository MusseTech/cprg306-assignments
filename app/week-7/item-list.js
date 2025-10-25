"use client";

import React, { useState } from 'react';
import Item from './item';
// REMOVE this line: import itemsData from './items.json'; 

const ItemList = ({ items }) => {  // Add items as prop
    // State to track sorting preference: "name" or "category"
    const [sortBy, setSortBy] = useState("name");

    // Helper function to define button styling based on active state
    const getButtonClass = (sortValue) => {
        const baseClass = "px-4 py-2 text-base font-semibold rounded-md transition duration-150 ease-in-out shadow-lg";

        return `${baseClass} ${
            sortBy === sortValue 
                ? 'bg-blue-600 text-white' // Active: Blue button with white text
                : 'bg-white text-gray-800 hover:bg-gray-200' 
        }`;
    };

    const getSortedItems = () => {
        let itemsToProcess = [...items];  // Use the items prop instead of itemsData

        // Ensure robust sorting logic
        itemsToProcess.sort((a, b) => {
            const comparison = a[sortBy].localeCompare(b[sortBy]);
            if (comparison !== 0) {
                return comparison;
            }
            return a.name.localeCompare(b.name);
        });
        
        return itemsToProcess;
    };
    
    const sortedData = getSortedItems();

    return (
        <div className="space-y-4"> 
            
            {/* Sorting Buttons */}
            <div className="flex space-x-4 mb-8 items-center justify-start"> 
                
                <span className="text-base text-gray-400">Sort By:</span> 
                
                <button onClick={() => setSortBy("name")} className={getButtonClass("name")}>
                    Name
                </button>
                <button onClick={() => setSortBy("category")} className={getButtonClass("category")}>
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
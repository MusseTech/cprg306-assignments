"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    // State holds the current, dynamic shopping list data
    const [items, setItems] = useState(itemsData);

    // Handler to add a new item to the list
    const handleAddItem = (newItem) => {
        // Creates a new array with all previous items + the new one
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        // Set page background to black and center the content
        <main className="min-h-screen p-4 bg-black text-white flex flex-col items-center">
            
            {/* Inner div to define the centered content column (max-w-xl) */}
            <div className="w-full max-w-xl space-y-8">
                
                {/* Title to match the screenshot */}
                <h1 className="text-2xl font-bold">Week 7 — Shopping List</h1>

                {/* NewItem form, passing the handler to update state */}
                <NewItem onAddItem={handleAddItem} />

                {/* ItemList, passing the current state data for display and sorting */}
                <ItemList items={items} />
            </div>
        </main>
    );
}

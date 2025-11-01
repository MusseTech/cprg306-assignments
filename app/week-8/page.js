"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

function cleanItemName(itemName) {
    let cleanedName = itemName.split(',')[0];
    cleanedName = cleanedName.replace(/[\u{1F600}-\u{1F6FF}]/gu, '');
    return cleanedName.trim();
}

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = cleanItemName(item.name);
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen p-4 bg-black text-white">
            <div className="flex justify-start mb-10"></div>
            <h1 className="text-3xl font-bold mb-6">Shopping List + Meal Ideas</h1>
            
            <div className="flex gap-8">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
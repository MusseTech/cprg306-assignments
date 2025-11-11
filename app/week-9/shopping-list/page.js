"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useUserAuth } from "../../contexts/AuthContext";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

function cleanItemName(itemName) {
    let cleanedName = itemName.split(',')[0];
    cleanedName = cleanedName.replace(/[\u{1F600}-\u{1F6FF}]/gu, '').trim();
    return cleanedName;
}

export default function ShoppingListPage() {
    const { user, loading, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!loading && user === null) {
            router.push("/week-9"); 
        }
    }, [user, loading, router]); 

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = cleanItemName(item.name);
        setSelectedItemName(cleanedName);
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
            router.push("/week-9");
        } catch (error) {
            console.error(error);
        }
    };

        if (loading) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                    <p>Verifying authentication...</p>
                </div>
            );
        }

        if (user === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p>Access denied. Redirecting to login...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen p-4 bg-black text-white">
            <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold">Shopping List + Meal Ideas</h1>
                <div className="flex items-center space-x-4">
                    {/* Display user name or email */}
                    <span className="text-sm">Welcome, {user.displayName || user.email}</span>
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex gap-8">
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
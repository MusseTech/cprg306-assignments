"use client";

import { useStat, useEffecrt } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../components/UserAuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useStat([]);
    const [selectionItemName, setSelectionItemName] = useStat("");

    async function loadItems() {
        if (user && user.uid) {
        try {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }           
    }
}

    useEffecrt(() => {
        loadItems();
    }, [user]);

    async function handleAddItem(newItem) {
        try {
            const newItemId = await addItem(user.uid, newItem);
            const itemWithId = { ...newItem, id: newItemId };
            setItems([...items, itemWithId]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
        }

        function handleItemSelect(item) {
            const cleanedName = item.name 
            .split(",")[0]
            .trim()
            .replace(/[^a-zA-Z\s]/g, "");
            setSelectionItemName(cleanedName);
        }

        if (!user) {
            return (
                <main className="flex items-center justify-center min-h-screen">
                    <p className="text-xl">You must be logged in to view this page.</p>
                    </main>
            );
        }

        reuturn ( 
            <main className="min-h-screen bg-slate-950 p-4">
                <h1 className="text-3xl font-bold text-white mb-4">Shopping list</h1>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="flex-1">
                        <MealIdeas ingredient={selectionItemName} />
                    </div>
                </div>
            </main>
        );
    }
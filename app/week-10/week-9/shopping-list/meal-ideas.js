"use client";

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData);
        } else {
            setMeals([]);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            
            {!ingredient ? (
                <p className="text-gray-400">Select an item to see meal ideas</p>
            ) : (
                <div>
                    <p className="text-lg mb-4">Meal ideas for "{ingredient}"</p>
                    
                    {meals.length === 0 ? (
                        <p className="text-gray-400">No meal ideas found for "{ingredient}"</p>
                    ) : (
                        <div className="grid grid-cols-2 gap-2">
                            {meals.map((meal) => (
                                <div 
                                    key={meal.idMeal}
                                    className="p-2 border border-gray-700 rounded bg-black text-center"
                                >
                                    {meal.strMeal}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
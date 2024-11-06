"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Fetch meal ideas from the API
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

  // Load meal ideas and update state
  useEffect(() => {
    async function loadMealIdeas() {
      const mealData = await fetchMealIdeas(ingredient);
      console.log("Fetched meals:", mealData);
      setMeals(mealData);
    }

    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-white">Select an item to see meal ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-white">No meal ideas found for {ingredient}</p>
      ) : (
        <div>
          <p className="text-white mb-4">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal} className="mb-4">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p>{meal.strMeal}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

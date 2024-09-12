import React from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';  // Import the JSON data

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-teal-600 hover:underline"
            >
              View Recipe Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

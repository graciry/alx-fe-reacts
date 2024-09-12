import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Adjust the path if needed

const RecipeDetail = () => {
  const { id } = useParams();  // Get the recipe ID from the URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by id from the imported data
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;  // Display loading indicator while fetching

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;

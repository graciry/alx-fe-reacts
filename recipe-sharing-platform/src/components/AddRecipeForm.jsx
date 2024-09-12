import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    // Handle form submission here (e.g., send data to an API)
    console.log({ title, ingredients, instructions });

    // Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium mb-1">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-sm font-medium mb-1">Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

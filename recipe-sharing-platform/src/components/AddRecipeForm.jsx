import React, { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  
  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please add at least two ingredients, separated by commas.";
    }
    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Clear errors and proceed with form submission
      setErrors({});
      console.log("Form submitted:", { title, ingredients, steps });
      // Reset form after submission
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Recipe Title
        </label>
        <input
          className={`shadow appearance-none border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="title"
          type="text"
          placeholder="Enter recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          className={`shadow appearance-none border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="ingredients"
          placeholder="Enter ingredients, separated by commas"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
          Preparation Steps
        </label>
        <textarea
          className={`shadow appearance-none border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="steps"
          placeholder="Enter steps, separated by periods"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;

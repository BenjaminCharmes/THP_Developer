import React, { useState, useEffect } from 'react';

function RecipeDisplay() {
  const [recipe, setRecipe] = useState({});

  const handleClick = async () => {
    try {
        const response = await fetch('https://api.example.com/random-recipe');
        const data = await response.json();
        setRecipe(data);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Suggest a recipe</button>
      {recipe.title && (
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <a href={recipe.url}>View the recipe</a>
        </div>
      )}
    </div>
  );
}

export default RecipeDisplay;
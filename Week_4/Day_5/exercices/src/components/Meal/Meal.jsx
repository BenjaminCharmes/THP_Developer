import React, { useState, useEffect } from 'react';

function RecipeDisplay() {
  const [recipe, setRecipe] = useState({});
  const url = 'http://www.themealdb.com/api/json/v1/1/random.php';

const handleClick = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
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
          <a href={recipe.url}>View recipe</a>
        </div>
      )}
    </div>
  );
}

export default RecipeDisplay;
import React from 'react';
import './Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="Recipe">
      <h2>{recipe.title}</h2>
      <div className="Recipe-content">
        <img src={recipe.image} alt={recipe.title} className="Recipe-image" />
        <div className="Recipe-details">
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
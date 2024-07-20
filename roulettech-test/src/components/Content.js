import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

function Content({ recipes }) {
  return (
    <div className="Content">
      {recipes.map((recipe, index) => (
        <Link to={`/recipe/${index}`} className="Item" key={index}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Content;
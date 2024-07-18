import React from 'react';
import { useParams } from 'react-router-dom';
import items from './items';
import './Recipe.css';

function Recipe() {
  let { id } = useParams();
  const item = items[id];
  return (
    <div className="Recipe">
      <h2>{item.title}</h2>
      <div className="Recipe-content">
        <img src={item.image} alt={item.title} className="Recipe-image" />
        <div className="Recipe-details">
          <p><strong>Ingredients:</strong> {item.description}</p>
          <p><strong>Instructions:</strong> {item.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
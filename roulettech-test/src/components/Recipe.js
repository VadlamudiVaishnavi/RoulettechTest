import React from 'react';
import { useParams } from 'react-router-dom';
import items from './items';

function Recipe() {
  let { id } = useParams();
  const item = items[id];
  return (
    <div className="Recipe">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>{item.instructions}</p>
    </div>
  );
}

export default Recipe;

import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item, index }) {
  return (
    <Link to={`/recipe/${index}`} className="Item">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
    </Link>
  );
}

export default Item;
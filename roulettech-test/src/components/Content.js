import React from 'react';
import Item from './Item';
import items from './items';

function Content() {
  return (
    <div className="Content">
      {items.map((item, index) => (
        <Item key={index} item={item} index={index} />
      ))}
    </div>
  );
}

export default Content;

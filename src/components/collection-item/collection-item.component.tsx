import React from 'react';

import './collection-item.styles.scss';

interface CollectionProps {
  id: number,
  name: string,
  price: number, 
  imageUrl: string,
};

const CollectionItem = (props: CollectionProps) => {
  const { id, name, price, imageUrl } = props;
  return (
    <div className="collection-item" key={id}>
      <div 
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">
          {name}
        </span>
        <span className="price">
          ${price}
        </span>
      </div>
    </div>
  );
}
export default CollectionItem;

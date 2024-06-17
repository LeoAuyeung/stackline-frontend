import React from 'react';

const Product: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>{product.subtitle}</h2>
      <h3>{product.brand}</h3>
      <p>{product.details.join(', ')}</p>
    </div>
  );
};

export default Product;

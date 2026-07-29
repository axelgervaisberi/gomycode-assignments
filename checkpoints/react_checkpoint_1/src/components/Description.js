import React from 'react';
// Import the product object
import product from '../product';

// Component that displays the product description
const Description = () => {
  return <p className="product-description text-muted">{product.description}</p>;
};

export default Description;

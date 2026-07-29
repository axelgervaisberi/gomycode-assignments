import React from 'react';
// Import the product object
import product from '../product';

// Component that displays the product name
const Name = () => {
  return <h2 className="product-name font-weight-bold text-dark">{product.name}</h2>;
};

export default Name;

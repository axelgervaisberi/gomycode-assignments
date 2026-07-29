import React from 'react';
// Import the product object
import product from '../product';

// Component that displays the product price
const Price = () => {
  return (
    <div className="product-price my-2">
      <span className="h4 text-success font-weight-bold">${product.price.toFixed(2)}</span>
    </div>
  );
};

export default Price;

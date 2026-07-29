import React from 'react';
// Import the product object
import product from '../product';

// Component that displays the product image
const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top product-image img-fluid rounded-top"
      style={{ maxHeight: '280px', objectFit: 'cover' }}
    />
  );
};

export default Image;

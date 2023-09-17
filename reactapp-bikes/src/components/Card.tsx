import React from 'react';

interface CardProps {
  product: {
    image: string;
    name: string;
    price: number;
  };
}

function Card({ product }: CardProps) {
    return (
        <div className="card">
      <div className="inner-card">
        <div className="card-image">
          <img src={`./img/${product.image}.png`} alt={product.name} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">{product.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

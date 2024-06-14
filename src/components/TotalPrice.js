import React from 'react';
import './TotalPrice.css';

const TotalPrice = ({ totalPrice }) => {
    return (
      <div className={`total-price-container ${totalPrice > 0 ? 'visible' : ''}`}>
        <h2>Total price: ${totalPrice.toFixed(2)}</h2>
      </div>
    );
  };

export default TotalPrice;

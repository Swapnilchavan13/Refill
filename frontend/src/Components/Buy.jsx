import React, { useState } from 'react';
import '../Styles/buy.css'; // Import CSS file
import {Link} from 'react-router-dom';

export const Buy = () => {
  const [fuelType, setFuelType] = useState('petrol');
  const [quantity, setQuantity] = useState(1);
  const petrolPrice = 100;
  const dieselPrice = 70;

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const calculateAmount = () => {
    let amount = 0;
    if (fuelType === 'petrol') {
      amount = quantity * petrolPrice;
    } else if (fuelType === 'diesel') {
      amount = quantity * dieselPrice;
    }
    return amount;
  };

  const handleBuyClick = () => {
    // Perform buy action here
    console.log(`Buying ${quantity} liters of ${fuelType} for ${calculateAmount()} Rs.`);
  };

  return (
    <div className="buy-container">
      <h2 className="buy-title">Buy Fuel</h2>
      <div className="buy-form">
        <div className="buy-field">
          <label className="buy-label" htmlFor="fuel-type">
            Fuel Type:
          </label>
          <select
            className="buy-select"
            id="fuel-type"
            value={fuelType}
            onChange={handleFuelTypeChange}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>
        <div className="buy-field">
          <label className="buy-label" htmlFor="quantity">
            Quantity (Liters):
          </label>
          <select
            className="buy-select"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className="buy-field">
          <label className="buy-label" htmlFor="amount">
            Amount (Rs):
          </label>
          <input
            className="buy-input"
            id="amount"
            type="text"
            value={calculateAmount()}
            readOnly
          />
        </div>
        <Link to={{
        pathname: '/payment',
        state: { amount: calculateAmount() }
      }}>
          {/* <button>hello</button> */}
        <button className="buy-button" onClick={handleBuyClick}>
          Buy
        </button>
        </Link>
      </div>
    </div>
  );
};


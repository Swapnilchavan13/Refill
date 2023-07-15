import React, { useState } from 'react';

const PetrolBuyer = () => {
  const [liters, setLiters] = useState(0);

  const handleBuyPetrol = () => {
    // Logic to process the purchase of petrol
    console.log(`You bought ${liters} liters of petrol.`);
    // Additional logic for payment, API calls, etc.

    // Reset the input field after the purchase
    setLiters(0);
  };

  return (
    <div>
      <h1>Buy Petrol</h1>
      <label htmlFor="liters">Enter the number of liters you want to buy:</label>
      <input
        type="number"
        id="liters"
        value={liters}
        onChange={(e) => setLiters(parseInt(e.target.value))}
      />
      <button onClick={handleBuyPetrol}>Buy</button>
    </div>
  );
};

export default PetrolBuyer;

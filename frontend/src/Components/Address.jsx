import React, { useState } from 'react';

const AddressSaver = () => {
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([]);

  const saveAddress = () => {
    if (address.trim() !== '') {
      setAddresses([...addresses, address]);
      console.log("Address saved:", address);
      setAddress('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter an address"
      />
      <button onClick={saveAddress}>Save Address</button>

      <h3>Saved Addresses:</h3>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressSaver;

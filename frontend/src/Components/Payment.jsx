import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import QRCode from 'qrcode.react';

export const PaymentPage = () => {
  const [scanResult, setScanResult] = useState('');
  const [amount, setAmount] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const processPayment = () => {
    // Replace 'YOUR_PAYMENT_API_ENDPOINT' with your actual payment API endpoint
    const apiUrl = 'YOUR_PAYMENT_API_ENDPOINT';

    // Mock data for payment processing (replace with the required payment details)
    const paymentData = {
      qrData: scanResult,
      amount: amount,
      currency: 'RS', // Replace with the actual currency code
    };

    // Make your API call for payment processing here
    // ...
    // You can use the fetch function or other libraries to perform the API call
    // ...

    // Mock success response (remove this in your actual implementation)
    setTimeout(() => {
      alert('Payment processed successfully!');
      setScanResult('');
    }, 2000);
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <div>
        <label htmlFor="amount">Enter amount Rs:</label>
        <input
          type="anount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <br />
        {scanResult ? (
          <div>
            <p>Scanned data: {scanResult}</p>
            <button onClick={processPayment}>Pay</button>
          </div>
        ) : (
          <div>
            {/* <QrScanner delay={300} onError={handleError} onScan={handleScan} style={{ width: '50%' }} /> */}
            <br />
            {amount > 0 && <QRCode value={`Amount: ${amount}`} size={200} />}
          </div>
        )}
      </div>
    </div>
  );
};


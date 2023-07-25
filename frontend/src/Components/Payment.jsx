// PaytmScannerGenerator.js
import React from 'react';
import QRCode from 'qrcode.react';
import '../Styles/payment.css'

export const PaymentPage = () => {
  // Replace these variables with your actual Paytm payment details
  const merchantId = 'your_merchant_id';
  const orderId = 'order123';
  const amount = '100';
  const channelId = 'WEB';
  const website = 'WEBSTAGING';

  // Function to generate the Paytm payment URL
  const generatePaytmURL = () => {
    const baseURL = 'https://securegw-stage.paytm.in/theia/processTransaction';
    const params = new URLSearchParams({
      MID: merchantId,
      ORDER_ID: orderId,
      TXN_AMOUNT: amount,
      CHANNEL_ID: channelId,
      WEBSITE: website,
    });

    return `${baseURL}?${params.toString()}`;
  };

  return (
    <div className="container">
      {/* Display the Paytm QR Code */}
      <div className="qr-code">
        <QRCode value={generatePaytmURL()} size={200} />
      </div>

      {/* Additional UI elements */}
      <h2>Scan the QR Code to make the payment via Paytm</h2>
      <div className="payment-info">
        <p>Amount: {amount} INR</p>
        <p>Order ID: {orderId}</p>
      </div>
      <button>Proceed to Pay</button>
    </div>
  );
};










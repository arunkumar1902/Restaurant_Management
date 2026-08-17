import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [payment, setPayment] = useState({ cardNumber: "", cardName: "", expiry: "", cvv: "" });
  const [error, setError] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPayment((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handlePayment = (event) => {
    event.preventDefault();
    if (paymentMethod === "card") {
      if (!payment.cardNumber || !payment.cardName || !payment.expiry || !payment.cvv) {
        setError("Please fill all payment details.");
        return;
      }
    }
    navigate("/orderSuccess");
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
          <h1>Payment</h1>
          <p>Complete your payment to place your order.</p>
        </div>
        <div className="payment-methods">
          <button type="button" className={paymentMethod === "card" ? "payment-method active" : "payment-method"} onClick={() => setPaymentMethod("card")}>Card</button>
          <button type="button" className={paymentMethod === "upi" ? "payment-method active" : "payment-method"} onClick={() => setPaymentMethod("upi")}>📱 UPI</button>
          <button type="button" className={paymentMethod === "cod" ? "payment-method active" : "payment-method"} onClick={() => setPaymentMethod("cod")}>💵 Cash on Delivery</button>
        </div>
        <form className="payment-form" onSubmit={handlePayment}>
          {paymentMethod === "card" && (
            <>
              <div className="input-group">
                <label>Card Number</label>
                <input type="text" name="cardNumber" value={payment.cardNumber} onChange={handleInput} placeholder="1234 5678 9012 3456" maxLength="19" />
              </div>
              <div className="input-group">
                <label>Card Holder Name</label>
                <input type="text" name="cardName" value={payment.cardName} onChange={handleInput} placeholder="Enter card holder name" />
              </div>
              <div className="payment-row">
                <div className="input-group">
                  <label>Expiry Date</label>
                  <input type="text" name="expiry" value={payment.expiry} onChange={handleInput} placeholder="MM/YY" />
                </div>
                <div className="input-group">
                  <label>CVV</label>
                  <input type="password" name="cvv" value={payment.cvv} onChange={handleInput} placeholder="123" maxLength="3" />
                </div>
              </div>
            </>
          )}
          {paymentMethod === "upi" && (
            <div className="input-group">
              <label>UPI ID</label>
              <input type="text" placeholder="example@upi" required />
            </div>
          )}
          {paymentMethod === "cod" && (
            <div className="cod-message">
              <h3>Cash on Delivery</h3>
              <p>Pay when your delicious food is delivered to your doorstep.</p>
            </div>
          )}
          {error && <p className="payment-error">{error}</p>}
          <button type="submit" className="pay-button">{paymentMethod === "cod" ? "Place Order" : "Pay Now"}</button>
        </form>
      </div>
    </div>
  );
}
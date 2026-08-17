import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/OrderSuccess.css'

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for ordering from FoodieHub. Your delicious food is on its way!</p>
        <button onClick={() => navigate("/menu")}>Continue Shopping</button>
      </div>
    </div>
  );
}
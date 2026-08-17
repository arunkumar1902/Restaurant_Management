import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();
    
    return (
        <div className="cart-page">

            <div className="cart-header">
                <p>Your Order</p>
                <h1>Shopping Cart 🛒</h1>
            </div>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Add some delicious food to your cart.</p>
                </div>
            ) : (
                <div className="cart-container">
                    <div className="cart-items">
                        <div className="cart-items-header">
                            <h2>Your Items ({totalItems})</h2>
                            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                        </div>

                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <span className="cart-cuisine">{item.cuisine}</span>
                                    <h3>{item.name}</h3>
                                    <p>₹{item.price}</p>
                                    <p>⭐ {item.rating}</p>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>

                                <div className="quantity-section">
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} >+</button>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{totalPrice}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="summary-total">
                            <span>Total</span>
                            <strong>₹{totalPrice}</strong>
                        </div>

                        <button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed to Checkout</button>
                    </div>

                </div>
            )}

        </div>
    );
};

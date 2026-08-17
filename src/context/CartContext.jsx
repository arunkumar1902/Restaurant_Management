import { createContext, useContext, useEffect, useState } from "react";
import price from "../components/price";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (recipe) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) => item.id === recipe.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === recipe.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...recipe,
                    price: price[recipe.id],
                    quantity: 1,
                },
            ];
        });

        alert("Item Added to Cart");
    };

    const removeFromCart = (id) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    };

    const increaseQuantity = (id) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
import { createContext, useState } from "react";

const Context = createContext([]);

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const isExiting = cart.find((item) => item.id === product.id);

    if (isExiting) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: quantity,
        },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </Context.Provider>
  );
}

export { CartContext, Context };

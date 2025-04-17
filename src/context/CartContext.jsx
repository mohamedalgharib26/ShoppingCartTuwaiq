import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext([]);

function CartContext({ children }) {
  const initialValue = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cart, setCart] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const isExiting = cart.find((item) => item.id === product.id);
    //if product Already exist
    if (isExiting) {
      setCart(
        cart.map((cartItem) => {
          return cartItem.id === product.id // cartItem = Product
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  //remove from cart

  return (
    <Context.Provider value={{ cart, addToCart }}>{children}</Context.Provider>
  );
}

export { CartContext, Context };

import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productToAdd
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    // If found, increment quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Return the new array with modified cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropdownContext = createContext({
  dropDownActive: false,
  setDropDownActive: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
});

export const CartDropdownProvider = ({ children }) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const cartItemsCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  const value = {
    dropDownActive,
    setDropDownActive,
    addItemToCart,
    cartItems,
    cartItemsCount,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

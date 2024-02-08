import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  dropDownActive: false,
  setDropDownActive: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const value = { dropDownActive, setDropDownActive };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

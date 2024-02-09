import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart.context";
import { useContext } from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button style={{ fontSize: "12px" }}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

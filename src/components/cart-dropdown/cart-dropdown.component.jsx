import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart.context";
import { useContext } from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, dropDownActive, setDropDownActive } =
    useContext(CartDropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        style={{ fontSize: "12px" }}
        onClick={() => setDropDownActive(!dropDownActive)}
      >
        <Link to="/checkout">GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;

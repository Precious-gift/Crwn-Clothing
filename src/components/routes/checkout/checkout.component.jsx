import "./checkout.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../../contexts/cart.context";
import { ReactComponent as CancelIcon } from "../../../assets/CancelIcon.svg";
import { ReactComponent as CaretLeft } from "../../../assets/caret_left_icon.svg";
import { ReactComponent as CaretRight } from "../../../assets/caret_right_icon.svg";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartDropdownContext);
  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="image-container">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="quantity">
                    <CaretLeft
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItemFromCart(item)}
                    />
                    {item.quantity}{" "}
                    <CaretRight
                      style={{ cursor: "pointer" }}
                      onClick={() => addItemToCart(item)}
                    />
                  </div>
                </td>
                <td>
                  <div className="price">${item.price}</div>
                </td>
                <td>
                  <div className="cancel">
                    <CancelIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => clearItemFromCart(item)}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={5}>
                <div className="total">TOTAL: ${cartTotal}</div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
export default Checkout;

import "./product-card.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);
  const { name, price, image } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={image} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;

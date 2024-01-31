import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="product-card-container">
      <img src={image} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;

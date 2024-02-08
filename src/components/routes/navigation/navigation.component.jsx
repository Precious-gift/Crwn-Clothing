import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { CartDropdownContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropDownActive, setDropDownActive } = useContext(CartDropdownContext);

  return (
    <div className="navigation">
      <Link to={`/`} className="logo-container">
        <div>
          <CrwnLogo style={{ width: "100%" }} />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link to={`/shop`} className="nav-link">
          Shop
        </Link>
        {currentUser ? (
          <span
            className="nav-link"
            onClick={signOutUser}
            style={{ cursor: "pointer" }}
          >
            Sign Out
          </span>
        ) : (
          <Link to={`/auth`} className="nav-link">
            Sign In
          </Link>
        )}
        <CartIcon onClick={() => setDropDownActive(!dropDownActive)} />
      </div>
      {dropDownActive && <CartDropdown />}
    </div>
  );
};

export default Navigation;

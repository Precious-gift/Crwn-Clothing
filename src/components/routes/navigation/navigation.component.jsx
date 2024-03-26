import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
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
    <NavigationContainer>
      <LogoContainer to={`/`}>
        <div>
          <CrwnLogo style={{ width: "100%" }} />
        </div>
      </LogoContainer>
      <NavLinks>
        <NavLink to={`/shop`}>Shop</NavLink>
        {currentUser ? (
          <NavLink onClick={signOutUser} as="span">
            Sign Out
          </NavLink>
        ) : (
          <NavLink to={`/auth`}>Sign In</NavLink>
        )}
        <CartIcon onClick={() => setDropDownActive(!dropDownActive)} />
      </NavLinks>
      {dropDownActive && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;

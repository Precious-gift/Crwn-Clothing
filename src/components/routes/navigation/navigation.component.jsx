import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className="navigation">
      <Link to={`/`} className="logo-container">
        <div>
          <CrwnLogo style={{ width: "100%" }} />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link to={`/`} className="nav-link">
          Home
        </Link>
        <Link to={`/auth`} className="nav-link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

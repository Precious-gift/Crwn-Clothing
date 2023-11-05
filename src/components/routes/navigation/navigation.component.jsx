import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
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
        <Link to={`/signIn`} className="nav-link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

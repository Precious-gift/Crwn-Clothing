import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
      </div>
    </div>
  );
};

export default Navigation;

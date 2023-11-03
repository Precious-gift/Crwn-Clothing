//import Home from "./components/routes/home/home.component";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>My Nav</h1>
      <ul>
        <li>
          <Link to={`/`}>Nav</Link>
        </li>
        <li>
          <Link to={`home`}>Home</Link>
        </li>
      </ul>
      <div id="mainContent">
        <Outlet />
      </div>
      {/* <Home /> */}
    </div>
  );
};

export default App;

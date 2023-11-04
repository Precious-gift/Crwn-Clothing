import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./components/routes/navigation/navigation.component";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div id="mainContent">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default App;

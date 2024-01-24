import { Fragment } from "react";
import categoriesList from "../../category-list/category-list";
import Directory from "../../directory/directory.component";

const Home = () => {
  return (
    <Fragment>
      <Directory categories={categoriesList} />
    </Fragment>
  );
};

export default Home;

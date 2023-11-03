import categoriesList from "../../category-list/category-list";
import Directory from "../../directory/directory.component";

const Home = () => {
  return <Directory categories={categoriesList} />;
};

export default Home;

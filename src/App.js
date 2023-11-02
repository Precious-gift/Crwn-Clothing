import categoriesList from "./components/category-list/category-list";
import Directory from "./components/directory/directory.component";

const App = () => {
  return <Directory categories={categoriesList} />;
};

export default App;

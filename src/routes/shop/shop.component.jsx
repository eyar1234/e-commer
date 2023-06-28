import CategoriesPreviw from "../categories-preview/categories-previw.component";
import { Route, Routes } from "react-router-dom";
import Categories from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviw />} />
      <Route path=":category" element={<Categories />} />
    </Routes>
  );
};

export default Shop;

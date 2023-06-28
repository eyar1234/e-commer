import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreviw = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreviw;

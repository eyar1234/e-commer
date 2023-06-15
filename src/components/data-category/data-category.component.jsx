import CategoryItem from "../category-item/category-item.component";
import "./data-category.styles.scss";

const CategoryData = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryData;

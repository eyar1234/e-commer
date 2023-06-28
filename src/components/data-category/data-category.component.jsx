import DirectoryItem from "../directory-item/directory-item.component";
import "./data-category.styles.scss";

const CategoryData = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryData;

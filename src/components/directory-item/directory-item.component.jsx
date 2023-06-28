import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <Link to={`shop/${title}`} key={id} className="directory-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
};
export default DirectoryItem;

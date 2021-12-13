import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";

const SearchResult = ({ id, title }) => {
  return (
    <li className={styles["search-result"]}>
      <Link to={`/movie/${id}`} className={styles["search-link"]}>
        {title}
      </Link>
    </li>
  );
};

export default SearchResult;

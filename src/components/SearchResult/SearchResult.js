import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";

const SearchResult = ({ id, title, release_date: release }) => {
  return (
    <li className={styles["search-result"]}>
      <Link
        to={`/movie/${id}`}
        tabIndex={-1}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          document.activeElement.blur();
          window.scrollTo(0, 0);
        }}
        className={styles["search-link"]}
      >
        {title}{" "}
        {release ? `(${release.substring(0, 4)})` : "(Unknown Release Date)"}
      </Link>
    </li>
  );
};

export default SearchResult;

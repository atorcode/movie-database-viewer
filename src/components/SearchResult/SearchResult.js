import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";
import defaultImage from "../../images/no-image-found.png";

const SearchResult = ({
  id,
  title,
  release_date: release,
  poster_path: image,
}) => {
  return (
    <li className={styles["search-result"]}>
      <div className={styles["search-result-link-and-info"]}>
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
          <img
            src={
              image ? `https://image.tmdb.org/t/p/w200${image}` : defaultImage
            }
            alt={title}
            className={styles["image"]}
          />
          {title}{" "}
          {release ? `(${release.substring(0, 4)})` : "(Unknown Release Date)"}
        </Link>
      </div>
    </li>
  );
};

export default SearchResult;

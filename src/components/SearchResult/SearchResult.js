import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";
import defaultImage from "../../images/no-image-found.png";

const SearchResult = ({
  id,
  title,
  release_date: release,
  poster_path: image,
  setAResultIsHovered,
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
          onMouseEnter={() => {
            setAResultIsHovered(true);
          }}
          onMouseLeave={() => {
            setAResultIsHovered(false);
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
          <p>
            {title.length <= 60 ? title : `${title.substring(0, 60).trim()}...`}{" "}
            {release
              ? `(${release.substring(0, 4)})`
              : "(Unknown Release Date)"}
          </p>
        </Link>
      </div>
    </li>
  );
};

export default SearchResult;

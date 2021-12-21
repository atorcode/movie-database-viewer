import styles from "./MovieInfo.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { formatMinutes } from "../../helpers/helpers";

const MovieInfo = () => {
  const { title, release, score, tagline, overview, runtime, rating } =
    useSelectedMovieContext();

  return (
    <div className={styles["movie-info"]}>
      {/* {title && title.length < 40 ? (
        <h1 className={styles["header"]}>{title}</h1>
      ) : (
        <h1 className={styles["header-small"]}>{title}</h1>
      )} */}
      {title && title.length < 40 && (
        <h1 className={styles["header"]}>{title}</h1>
      )}
      {title && title.length >= 40 && title.length < 70 && (
        <h1 className={styles["header-small"]}>{title}</h1>
      )}
      {title && title.length >= 70 && (
        <h1 className={styles["header-smallest"]}>{`${title
          .substring(0, 70)
          .trim()}...`}</h1>
      )}
      {tagline && <h2>{tagline}</h2>}
      <p className={styles["key-info"]}>
        <span>
          {release ? release.substring(0, 4) : "Unknown Release Date"}
        </span>
        <span> &#183; {rating}</span>
        <span> &#183; {formatMinutes(runtime)}</span>
        <span>
          {" "}
          &#183; <FaStar className={styles["star-icon"]} />
          {score}
        </span>
      </p>

      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;

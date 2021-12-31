import styles from "./MovieInfo.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { formatMinutes } from "../../helpers/helpers";
import FavoriteButton from "../FavoriteButton";
import TrailerButton from "../TrailerButton";

const MovieInfo = () => {
  const { title, release, score, tagline, overview, runtime, rating, trailer } =
    useSelectedMovieContext();

  return (
    <div className={styles["movie-info"]}>
      {title && title.length < 40 && (
        <h1 className={styles["header"]}>{title}</h1>
      )}
      {title && title.length >= 40 && title.length < 70 && (
        <h1 className={styles["header-small"]}>{title}</h1>
      )}
      {title && title.length >= 70 && (
        <>
          <h1
            className={`${styles["header-smallest"]} ${styles["text-shortened"]}`}
          >{`${title.substring(0, 70).trim()}...`}</h1>
          <div className={styles["tooltip"]}>{title}</div>
        </>
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

      {overview && overview.length <= 500 && <p>{overview}</p>}
      {overview && (
        <>
          <p className={styles["text-shortened"]}>
            {overview.length > 500 && `${overview.substring(0, 500).trim()}...`}
          </p>
          <div className={styles["tooltip"]}>{overview}</div>
        </>
      )}

      <div className={styles["buttons-container"]}>
        <FavoriteButton />

        {trailer && (
          <div>
            <TrailerButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieInfo;

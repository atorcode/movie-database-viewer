import styles from "./MovieInfo.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { formatMinutes } from "../../helpers/helpers";

const MovieInfo = () => {
  const { title, release, score, tagline, overview, runtime, rating } =
    useSelectedMovieContext();

  return (
    <div className={styles["movie-info"]}>
      <h1>{title}</h1>
      {tagline && <h2>{tagline}</h2>}
      <p>
        {release ? release.substring(0, 4) : "Unknown Release Date"} &#183;{" "}
        {rating} &#183; {formatMinutes(runtime)} &#183;{" "}
        <FaStar className={styles["star-icon"]} />
        {score}
      </p>

      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;

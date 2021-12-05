import styles from "./MovieInfo.module.scss";
import { FaStar } from "react-icons/fa";
const MovieInfo = ({
  title,
  release,
  score,
  tagline,
  overview,
  formattedRuntime,
}) => {
  return (
    <div className={styles["movie-info"]}>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
      <p>{release && release.substring(0, 4)}</p>
      <p>
        {formattedRuntime} <FaStar className={styles["star-icon"]} />
        {score}
      </p>
      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;

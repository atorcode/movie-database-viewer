import styles from "./Movie.module.scss";
import dummyMovie from "../../dummyMovie.png";
const Movie = ({ title }) => {
  return (
    <article className={styles["movie-card"]}>
      <img src={dummyMovie} alt="Movie" width="325px" />
      <h4>{title}</h4>
    </article>
  );
};

export default Movie;

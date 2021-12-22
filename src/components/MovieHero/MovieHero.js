import styles from "./MovieHero.module.scss";
import MovieInfo from "../MovieInfo";
import MovieBackgroundImage from "../MovieBackgroundImage";

const MovieHero = () => {
  return (
    <section className={styles["movie-hero"]}>
      <MovieInfo />
      <MovieBackgroundImage />
    </section>
  );
};

export default MovieHero;

import styles from "./MovieHero.module.scss";
import MovieInfo from "../MovieInfo";
import MovieBackgroundImage from "../MovieBackgroundImage";
import FavoriteButton from "../FavoriteButton";

const MovieHero = () => {
  return (
    <section className={styles["movie-hero"]}>
      <MovieInfo />
      <MovieBackgroundImage />
      <div className={styles["favorite-button-container"]}>
        <FavoriteButton />
      </div>
    </section>
  );
};

export default MovieHero;

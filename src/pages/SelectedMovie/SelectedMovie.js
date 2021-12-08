import { useEffect } from "react";
import styles from "./SelectedMovie.module.scss";
import MovieHero from "../../components/MovieHero";
import MovieDetails from "../../components/MovieDetails";
import Cast from "../../components/Cast";

const SelectedMovie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles["main"]}>
      <MovieHero />
      <div className={styles["flex-container"]}>
        <Cast />
        <MovieDetails />
      </div>
    </main>
  );
};

export default SelectedMovie;

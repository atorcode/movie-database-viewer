import { useEffect } from "react";
import styles from "./SelectedMovie.module.scss";
import MovieHero from "../../components/MovieHero";
import MovieDetails from "../../components/MovieDetails";
import Cast from "../../components/Cast";

const SelectedMovie = () => {
  // This useEffect will not trigger when switching from a movie page to another movie page, since only the data changes and there is no mounting/unmounting going on.
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

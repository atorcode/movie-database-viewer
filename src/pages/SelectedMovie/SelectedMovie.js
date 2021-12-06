import { useEffect } from "react";
import styles from "./SelectedMovie.module.scss";
import MovieHero from "../../components/MovieHero";
import Cast from "../../components/Cast";

const SelectedMovie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles["main"]}>
      <MovieHero />
      <Cast />
    </main>
  );
};

export default SelectedMovie;

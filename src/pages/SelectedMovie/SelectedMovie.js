import { useEffect } from "react";
import styles from "./SelectedMovie.module.scss";
import MovieHero from "../../components/MovieHero";
import MovieDetails from "../../components/MovieDetails";
import Cast from "../../components/Cast";
import { useNotificationContext } from "../../contexts/NotificationContext";

const SelectedMovie = () => {
  const { setSide } = useNotificationContext();

  // This useEffect will not trigger when switching from a movie page to another movie page, since only the data changes and there is no remounting going on. Effects that should happen when switching between movie pages can be found in the onClick handler in SearchResult.
  useEffect(() => {
    // setSide("left");
    window.scrollTo(0, 0);
    // return () => {
    //   setSide("right");
    // };
  }, []);

  return (
    <main className={styles["main"]}>
      <MovieHero />
      <div className={styles["flex-container"]}>
        <MovieDetails />
        <Cast />
      </div>
    </main>
  );
};

export default SelectedMovie;

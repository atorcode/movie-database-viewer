import styles from "./Favorites.module.scss";
import MovieCards from "../../components/MovieCards";

const Favorites = () => {
  const favoriteMovies = [];

  return (
    <main className={styles["main-content"]}>
      <section className={styles["favorite-movies"]}></section>
    </main>
  );
};

export default Favorites;

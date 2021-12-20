import styles from "./Favorites.module.scss";
import MovieCards from "../../components/MovieCards";

const Favorites = () => {
  const idsOfFavorites = Object.keys(localStorage);

  const favorites = idsOfFavorites.map((id) => {
    return JSON.parse(localStorage.getItem(id));
  });

  console.log(favorites);
  return (
    <main className={styles["main-content"]}>
      <section className={styles["favorite-movies"]}>
        <MovieCards moviesToDisplay={favorites} header="Favorite Movies" />
      </section>
    </main>
  );
};

export default Favorites;

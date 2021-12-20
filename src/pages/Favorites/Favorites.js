import styles from "./Favorites.module.scss";
import MovieGroupingHeader from "../../components/MovieGroupingHeader";
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
        {favorites.length === 0 && (
          <h3 className={styles["no-favorites"]}>
            You haven't added any favorite movies yet
          </h3>
        )}
        <MovieGroupingHeader header={"Favorite Movies"} />
        <MovieCards moviesToDisplay={favorites} header="Favorite Movies" />
      </section>
    </main>
  );
};

export default Favorites;

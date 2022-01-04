import { useState, useEffect } from "react";
import styles from "./Favorites.module.scss";
import MovieGroupingHeader from "../../components/MovieGroupingHeader";
import MovieCards from "../../components/MovieCards";
import ClearButton from "../../components/ClearButton";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

const Favorites = () => {
  // const favorites = Object.keys(localStorage).map((id) => {
  //   return JSON.parse(localStorage.getItem(id));
  // });

  // const [displayedMovies, setDisplayedMovies] = useState([]);

  const { favoriteMovies, setFavoriteMovies } = useFavoritesContext();

  useEffect(() => {
    const updateDisplayedMovies = () => {
      setFavoriteMovies(
        Object.keys(localStorage).map((id) => {
          return JSON.parse(localStorage.getItem(id));
        })
      );
    };
    // Any time storage is modified from different window, storage event will fire.
    window.addEventListener("storage", updateDisplayedMovies);
    return () => {
      window.removeEventListener("storage", updateDisplayedMovies);
    };
  }, []);

  return (
    <main className={styles["main-content"]}>
      <section className={styles["favorite-movies"]}>
        {favoriteMovies.length === 0 && (
          <h3 className={styles["no-favorites"]}>
            You haven't added any favorite movies yet
          </h3>
        )}
        <div className={styles["header-and-button"]}>
          <MovieGroupingHeader header={"Favorite Movies"} position={"left"} />
          <div>
            <ClearButton />
          </div>
        </div>
        <MovieCards
          moviesToDisplay={favoriteMovies}
          styleInfo={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
            justifyContent: "start",
          }}
        />
      </section>
    </main>
  );
};

export default Favorites;

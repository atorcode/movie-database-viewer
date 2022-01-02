import { useState, useEffect, useRef } from "react";
import styles from "./Favorites.module.scss";
import MovieGroupingHeader from "../../components/MovieGroupingHeader";
import MovieCards from "../../components/MovieCards";
import ClearButton from "../../components/ClearButton";

const Favorites = () => {
  const idsOfFavorites = Object.keys(localStorage);

  const favorites = idsOfFavorites.map((id) => {
    return JSON.parse(localStorage.getItem(id));
  });

  return (
    <main className={styles["main-content"]}>
      <section className={styles["favorite-movies"]}>
        {favorites.length === 0 && (
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
          moviesToDisplay={favorites}
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

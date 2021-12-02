import { useState } from "react";
import styles from "./Movies.module.scss";
import Movie from "../Movie";

const Movies = ({ displayedMovies }) => {
  return (
    <main className={styles["main-content"]}>
      <section>
        <h1>Popular Movies</h1>
        <div className={styles["movies-container"]}>
          {displayedMovies &&
            displayedMovies.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
        </div>
      </section>
    </main>
  );
};

export default Movies;

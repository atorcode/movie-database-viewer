import { useState } from "react";
import styles from "./Movies.module.scss";
import Movie from "../Movie";
import dummyData from "../../dummyData.json";
const Movies = () => {
  const [movies, setMovies] = useState(dummyData);
  console.log(movies);
  return (
    <main className={styles["main-content"]}>
      <section>
        <h2>Popular Movies</h2>
        <div className={styles["movies-container"]}>
          {movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Movies;

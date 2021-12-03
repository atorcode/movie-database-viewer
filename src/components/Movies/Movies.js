import styles from "./Movies.module.scss";
import Movie from "../Movie";
import LoadButton from "../_basic/LoadButton";
import PropTypes from "prop-types";
const Movies = (props) => {
  const { displayedMovies } = props;
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
        <LoadButton {...props} />
      </section>
    </main>
  );
};

Movies.propTypes = {
  displayedMovies: PropTypes.array.isRequired,
};

export default Movies;

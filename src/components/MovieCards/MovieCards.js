import styles from "./MovieCards.module.scss";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";

const MovieCards = ({ moviesToDisplay, header }) => {
  return (
    <>
      {moviesToDisplay && (
        <>
          <h1 className={styles["header"]}>{header}</h1>
          <div className={styles["movies-container"]}>
            {moviesToDisplay.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

MovieCards.propTypes = {
  moviesToDisplay: PropTypes.array,
  header: PropTypes.string.isRequired,
};

export default MovieCards;

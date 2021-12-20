import styles from "./MovieCards.module.scss";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import MovieGroupingHeader from "../MovieGroupingHeader";

const MovieCards = ({ moviesToDisplay }) => {
  return (
    <>
      {moviesToDisplay && (
        <>
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
};

export default MovieCards;

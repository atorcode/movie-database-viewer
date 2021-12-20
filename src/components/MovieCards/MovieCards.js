import styles from "./MovieCards.module.scss";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import MovieGroupingHeader from "../MovieGroupingHeader";

const MovieCards = ({ moviesToDisplay, styleInfo }) => {
  return (
    <>
      {moviesToDisplay && (
        <>
          <div className={styles["movies-container"]} style={styleInfo}>
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
  styleInfo: PropTypes.object,
};

export default MovieCards;

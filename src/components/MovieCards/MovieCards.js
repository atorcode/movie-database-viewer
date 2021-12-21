import { useEffect, useRef } from "react";
import styles from "./MovieCards.module.scss";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";

const MovieCards = ({ moviesToDisplay, styleInfo }) => {
  const moviesContainerEl = useRef(null);

  useEffect(() => {
    if (moviesToDisplay && moviesContainerEl && moviesContainerEl.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // contentBoxSize implementation may vary across browsers. Usually it's an array, but it could be a single content rect
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;

          if (
            moviesContainerEl &&
            moviesContainerEl.current &&
            contentBoxSize.inlineSize < 465
          ) {
            moviesContainerEl.current.style.justifyContent = "center";
          }
        }
      });
      resizeObserver.observe(moviesContainerEl.current);
    }
  });

  return (
    <>
      {moviesToDisplay && (
        <>
          <div
            ref={moviesContainerEl}
            className={styles["movies-container"]}
            style={styleInfo}
          >
            {moviesToDisplay.map((movie) => {
              const { id, title } = movie;

              // The name of these props may vary depending on if they come directly from the JSON or if they've already been formatted by SelectedMovieContext
              const release = movie.release || movie.release_date;
              const poster = movie.poster || movie.poster_path;
              const score = movie.score ?? movie.vote_average;
              return (
                <MovieCard
                  key={movie.id}
                  id={id}
                  title={title}
                  release={release}
                  poster={poster}
                  score={score}
                />
              );
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

import { useState, useEffect } from "react";
import styles from "./LoadButton.module.scss";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import PropTypes from "prop-types";

const LoadButton = ({ displayedMovies, setDisplayedMovies, page, setPage }) => {
  const [startFetch, setStartFetch] = useState(false);
  const { data } = useSWR(() => {
    return startFetch
      ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      : null;
  }, fetcher);

  useEffect(() => {
    if (data) {
      setDisplayedMovies([...displayedMovies, ...data.results]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <button
        type="button"
        className={styles["button"]}
        onClick={() => {
          setPage(page + 1);
          setStartFetch(true);
          document.activeElement.blur();
        }}
      >
        Load more
      </button>
    </>
  );
};

LoadButton.propTypes = {
  displayedMovies: PropTypes.array.isRequired,
  setDisplayedMovies: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default LoadButton;

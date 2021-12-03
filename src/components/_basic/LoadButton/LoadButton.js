import { useState, useEffect } from "react";
import styles from "./LoadButton.module.scss";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
const LoadButton = ({ displayedMovies, setDisplayedMovies, page, setPage }) => {
  const [startFetch, setStartFetch] = useState(false);
  const { data, error } = useSWR(() => {
    return startFetch
      ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      : null;
  }, fetcher);

  useEffect(() => {
    if (data) {
      console.log([...displayedMovies, ...data.results]);
      setDisplayedMovies([...displayedMovies, ...data.results]);
    }
  }, [data]);

  return (
    <>
      <button
        type="button"
        className={styles["load-more-button"]}
        onClick={() => {
          setPage(page + 1);
          setStartFetch(true);
        }}
      >
        Load more
      </button>
    </>
  );
};

export default LoadButton;

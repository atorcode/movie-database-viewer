import { useState, useEffect } from "react";
import styles from "./LoadButton.module.scss";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
const LoadButton = ({ displayedMovies, setDisplayedMovies }) => {
  const [startFetch, setStartFetch] = useState(false);
  const { data, error } = useSWR(() => {
    return startFetch
      ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=2`
      : null;
  }, fetcher);

  useEffect(() => {
    if (data) {
      setDisplayedMovies(data.results);
    }
  }, [data]);

  return (
    <>
      <button
        type="button"
        className={styles["load-more-button"]}
        onClick={() => {
          setStartFetch(true);
        }}
      >
        Load more
      </button>
    </>
  );
};

export default LoadButton;

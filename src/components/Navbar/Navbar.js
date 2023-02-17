import { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const [movieToSearch, setMovieToSearch] = useState("");
  const [startFetch, setStartFetch] = useState(false);

  const { data } = useSWR(() => {
    return startFetch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieToSearch}&include_adult=false`
      : null;
  }, fetcher);

  const propsToPass = {
    movieToSearch,
    setMovieToSearch,
    setStartFetch,
    data,
  };

  return (
    <nav className={styles["navigation-bar"]}>
      <Link
        to="/"
        className={styles["site-name-link"]}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <h2 className={styles["site-name"]}>Movie Database Viewer</h2>
        <h2 className={styles["site-name-acronym"]}>MDbV</h2>
      </Link>
      <SearchBar {...propsToPass} />
      <Link
        to="/favorites"
        className={styles["favorites-link"]}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <h2 className={styles["favorites"]}>Favorites</h2>
        <div className={styles["favorite-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke="rgb(255, 25, 25)"
            strokeWidth="2px"
            fill="rgb(255, 25, 25)"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
          </svg>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;

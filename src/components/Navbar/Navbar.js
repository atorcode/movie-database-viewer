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
      <Link to="/" className={styles["site-name-link"]}>
        <h2 className={styles["site-name"]}>Movie Database Viewer</h2>
        <h2 className={styles["site-name-acronym"]}>MDbV</h2>
      </Link>
      <SearchBar {...propsToPass} />
    </nav>
  );
};

export default Navbar;

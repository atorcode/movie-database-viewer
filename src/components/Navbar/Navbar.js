import { useState } from "react";
import styles from "./Navbar.module.scss";
import SearchBar from "../_basic/SearchBar";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";

const Navbar = () => {
  const [movieToSearch, setMovieToSearch] = useState("");
  const [startFetch, setStartFetch] = useState(false);

  const { data } = useSWR(() => {
    return startFetch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieToSearch}&include_adult=false`
      : null;
  }, fetcher);

  console.log(data);

  return (
    <nav className={styles["navigation-bar"]}>
      <Link to="/">
        <h2 className={styles["site-name"]}>Movie Database Viewer</h2>
      </Link>
      <SearchBar
        movieToSearch={movieToSearch}
        setMovieToSearch={setMovieToSearch}
        setStartFetch={setStartFetch}
      />
    </nav>
  );
};

export default Navbar;

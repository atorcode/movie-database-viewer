import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

const SearchBar = ({ movieToSearch, setMovieToSearch, setStartFetch }) => {
  const inputEl = useRef(null);

  return (
    <div className={styles["search-bar-container"]}>
      <FiSearch
        className={styles["search-bar-icon"]}
        onClick={() => {
          inputEl.current.focus();
        }}
      />
      <input
        ref={inputEl}
        type="search"
        placeholder="Search for a movie..."
        className={styles["search-bar"]}
        value={movieToSearch}
        onChange={(e) => {
          setMovieToSearch(e.target.value);
          if (e.target.value.length === 0) {
            setStartFetch(false);
          } else {
            setStartFetch(true);
          }
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  movieToSearch: PropTypes.string.isRequired,
  setMovieToSearch: PropTypes.func.isRequired,
  setStartFetch: PropTypes.func.isRequired,
};

export default SearchBar;

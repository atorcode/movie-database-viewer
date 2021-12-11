import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ movieToSearch, setMovieToSearch }) => {
  const inputEl = useRef(null);

  console.log(movieToSearch);

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
        }}
      />
    </div>
  );
};

export default SearchBar;

import { useState, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import SearchResults from "../SearchResults";

const SearchBar = (props) => {
  const [renderResults, setRenderResults] = useState(false);
  const inputEl = useRef(null);

  const { movieToSearch, setMovieToSearch, setStartFetch } = props;
  return (
    <div className={styles["search-and-results"]}>
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
              e.target.parentNode.classList.remove(
                `${styles["search-bar-container-flattened"]}`
              );
              setRenderResults(false);
            } else {
              setStartFetch(true);
              if (
                !e.target.parentNode.classList.contains(
                  `${styles["search-bar-container-flattened"]}`
                )
              ) {
                e.target.parentNode.className += ` ${styles["search-bar-container-flattened"]}`;
              }
              setRenderResults(true);
            }
          }}
          onFocus={(e) => {
            if (e.target.value.length !== 0) {
              e.target.parentNode.className += ` ${styles["search-bar-container-flattened"]}`;
              setRenderResults(true);
            }
          }}
          onBlur={(e) => {
            e.target.parentNode.classList.remove(
              `${styles["search-bar-container-flattened"]}`
            );
            setRenderResults(false);
          }}
        />
      </div>
      {renderResults && <SearchResults data={props.data} />}
    </div>
  );
};

SearchBar.propTypes = {
  movieToSearch: PropTypes.string.isRequired,
  setMovieToSearch: PropTypes.func.isRequired,
  setStartFetch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default SearchBar;

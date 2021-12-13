import { useState, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import SearchResults from "../SearchResults";

const SearchBar = (props) => {
  const [renderResults, setRenderResults] = useState(false);
  const inputEl = useRef(null);

  const { movieToSearch, setMovieToSearch, setStartFetch } = props;

  const handleSearch = (event) => {
    setMovieToSearch(event.target.value);
    if (event.target.value.length === 0) {
      setStartFetch(false);
      event.target.parentNode.classList.remove(
        `${styles["search-bar-container-flattened"]}`
      );
      setRenderResults(false);
    } else {
      setStartFetch(true);
      if (
        !event.target.parentNode.classList.contains(
          `${styles["search-bar-container-flattened"]}`
        )
      ) {
        event.target.parentNode.className += ` ${styles["search-bar-container-flattened"]}`;
      }
      setRenderResults(true);
    }
  };

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
          onChange={(e) => handleSearch(e)}
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
      {/* below for testing */}
      {/* <SearchResults data={props.data} /> */}
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

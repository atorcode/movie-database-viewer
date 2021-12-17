import { useState, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import SearchResults from "../SearchResults";

const SearchBar = (props) => {
  const [renderResults, setRenderResults] = useState(false);
  const inputEl = useRef(null);
  const searchResultsEl = useRef(null);

  const { movieToSearch, setMovieToSearch, setStartFetch } = props;

  const handleSearch = (event) => {
    setMovieToSearch(event.target.value);
    if (event.target.value.length === 0) {
      setStartFetch(false);
      event.target.parentNode.parentNode.classList.remove(
        `${styles["search-bar-container-flattened"]}`
      );
      setRenderResults(false);
    } else {
      setStartFetch(true);
      if (
        !event.target.parentNode.parentNode.classList.contains(
          `${styles["search-bar-container-flattened"]}`
        )
      ) {
        event.target.parentNode.parentNode.className += ` ${styles["search-bar-container-flattened"]}`;
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

        <form
          className={styles["search-form"]}
          onSubmit={(e) => {
            e.preventDefault();
            if (
              searchResultsEl &&
              searchResultsEl.current &&
              searchResultsEl.current.children[0]
            ) {
              searchResultsEl.current.children[0].children[0].children[0].click();
            }
          }}
        >
          <input
            ref={inputEl}
            type="search"
            placeholder="Search for a movie..."
            className={styles["search-bar"]}
            value={movieToSearch}
            onChange={(e) => handleSearch(e)}
            onFocus={(e) => {
              if (e.target.value.length !== 0) {
                e.target.parentNode.parentNode.className += ` ${styles["search-bar-container-flattened"]}`;
                setRenderResults(true);
              }
            }}
            onBlur={(e) => {
              e.target.parentNode.parentNode.classList.remove(
                `${styles["search-bar-container-flattened"]}`
              );
              setRenderResults(false);
            }}
          />
        </form>
      </div>
      {renderResults && (
        <SearchResults data={props.data} ref={searchResultsEl} />
      )}
      {/* below for testing */}
      {/* <SearchResults data={props.data} ref={searchResultsEl} /> */}
    </div>
  );
};

SearchBar.propTypes = {
  movieToSearch: PropTypes.string.isRequired,
  setMovieToSearch: PropTypes.func.isRequired,
  setStartFetch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.array,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};

export default SearchBar;

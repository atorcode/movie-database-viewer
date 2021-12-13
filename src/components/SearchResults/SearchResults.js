import React from "react";
import styles from "./SearchResults.module.scss";
import SearchResult from "../SearchResult";

const SearchResults = ({ data }) => {
  return (
    <div className={styles["search-results-panel"]}>
      {data && (
        <ul className={styles["search-results"]}>
          {data.results.map((result) => {
            return <SearchResult />;
          })}
        </ul>
      )}
      {/* {!data && <p>Loading</p>} */}

      {data && !data.total_results && (
        <p className={styles["no-results"]}>No matching results</p>
      )}
    </div>
  );
};

export default SearchResults;

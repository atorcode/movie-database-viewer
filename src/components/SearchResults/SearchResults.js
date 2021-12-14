import React from "react";
import styles from "./SearchResults.module.scss";
import SearchResult from "../SearchResult";

const SearchResults = ({ data }) => {
  let results;

  if (data) {
    ({ results } = data);
  }

  return (
    <div className={styles["search-results-panel"]}>
      {results && (
        <ul className={styles["search-results"]}>
          {results.map((result) => {
            return <SearchResult key={result.id} {...result} />;
          })}
        </ul>
      )}

      {/* {!data && <p>Loading</p>} */}

      {data && !data.total_results && (
        <div className={styles["no-results-container"]}>
          <p className={styles["no-results"]}>No matching results</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

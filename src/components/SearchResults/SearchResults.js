import { useEffect, forwardRef } from "react";
import styles from "./SearchResults.module.scss";
import SearchResult from "../SearchResult";

const SearchResults = forwardRef(({ data }, searchResultsEl) => {
  let results;

  if (data) {
    ({ results } = data);
  }

  // The following imitates the visual effect of focusing without actually focusing. The first search result is highlighted so the user knows that submitting the search form will bring up that result by default.
  useEffect(() => {
    let targetEl;
    if (
      searchResultsEl &&
      searchResultsEl.current &&
      searchResultsEl.current.children[0]
    ) {
      console.log(searchResultsEl.current.children[0]);
      targetEl = searchResultsEl.current.children[0];
      targetEl.style = "background-color: #4e4742; border-radius: 0.25rem";
    }
    return () => {
      if (targetEl) {
        targetEl.style = "background-color: inherit;";
      }
    };
  });

  return (
    <div className={styles["search-results-panel"]}>
      {results && (
        <ul ref={searchResultsEl} className={styles["search-results"]}>
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
});

export default SearchResults;

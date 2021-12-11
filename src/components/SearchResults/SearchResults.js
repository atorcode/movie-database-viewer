import React from "react";
import styles from "./SearchResults.module.scss";

const SearchResults = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles["search-results"]}>
      <p>No matching results</p>
    </div>
  );
});

export default SearchResults;

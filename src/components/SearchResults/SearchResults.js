import React from "react";
import styles from "./SearchResults.module.scss";

const SearchResults = React.forwardRef((props, ref) => {
  return <div ref={ref} className={styles["search-results"]}></div>;
});

export default SearchResults;

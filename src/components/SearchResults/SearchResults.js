import React from "react";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ data }) => {
  console.log(data);
  return (
    <div className={styles["search-results"]}>
      <p>No matching results</p>
    </div>
  );
};

export default SearchResults;

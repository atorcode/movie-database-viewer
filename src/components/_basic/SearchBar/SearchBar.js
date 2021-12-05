import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const inputEl = useRef(null);
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
      />
    </div>
  );
};

export default SearchBar;

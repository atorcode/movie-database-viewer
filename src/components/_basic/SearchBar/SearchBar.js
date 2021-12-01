import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className={styles["search-bar-container"]}>
      <FiSearch className={styles["search-bar-icon"]} />
      <input
        type="search"
        placeholder="Search for a movie..."
        className={styles["search-bar"]}
      />
    </div>
  );
};

export default SearchBar;

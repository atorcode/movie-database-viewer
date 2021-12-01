import styles from "./SearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className={styles["search-bar-container"]}>
      <FiSearch />
      <input
        type="search"
        placeholder="Search..."
        className={styles["search-bar"]}
      />
    </div>
  );
};

export default SearchBar;

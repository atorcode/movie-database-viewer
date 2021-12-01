import styles from "./Navbar.module.scss";
import SearchBar from "../_basic/SearchBar";
const Navbar = () => {
  return (
    <nav className={styles["navigation-bar"]}>
      <h2 className={styles["site-name"]}>Movie Database Viewer</h2>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

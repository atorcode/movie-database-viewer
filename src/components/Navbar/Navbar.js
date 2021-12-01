import styles from "./Navbar.module.scss";
import SearchBar from "../_basic/SearchBar";
const Navbar = () => {
  return (
    <nav className={styles["navigation-bar"]}>
      <h1 className={styles["site-name"]}>Movie Database Viewer</h1>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

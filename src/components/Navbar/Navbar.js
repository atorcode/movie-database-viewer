import styles from "./Navbar.module.scss";
import SearchBar from "../_basic/SearchBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles["navigation-bar"]}>
      <Link to="/">
        <h2 className={styles["site-name"]}>Movie Database Viewer</h2>
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

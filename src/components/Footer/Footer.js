import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.scss";
import TMDBShoutOut from "../../images/PoweredByTMDB.svg";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <img
          src={TMDBShoutOut}
          alt="Powered by TMDB"
          className={styles["tmdb-shout-out"]}
        />
      </a>
      <p>
        This application consumes the TMDB API but is not affiliated with TMDB
      </p>
      <p className={styles["copyright"]}>&copy; 2021 Alberto Torrigiotti</p>
      <a href="https://github.com/atorcode/movie-database-viewer">
        <FaGithub className={styles["github-icon"]} />
      </a>
    </footer>
  );
};

export default Footer;

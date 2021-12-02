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
    </footer>
  );
};

export default Footer;

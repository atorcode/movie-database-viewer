import styles from "./MovieCard.module.scss";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultImage from "../../images/no-image-found.png";
const MovieCard = (props) => {
  const {
    id,
    title,
    release_date: release,
    poster_path: image,
    vote_average: score,
  } = props;

  return (
    <Link to={`/movie/${id}`} className={styles["movie-card"]}>
      <article>
        <img
          src={image ? `https://image.tmdb.org/t/p/w500${image}` : defaultImage}
          alt={title}
        />

        {/* <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="rgb(255, 25, 25)"
          className={styles["favorite-icon"]}
        >
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="rgb(255, 25, 25)"
          stroke-width="2px"
          fill="transparent"
          viewBox="0 0 24 24"
          className={styles["favorite-icon"]}
        >
          <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
        </svg>
        <header>
          <h4 className={styles["title"]}>{title}</h4>
          <div className={styles["release-year-and-score"]}>
            {release && (
              <p className={styles["release-year"]}>
                {release.substring(0, 4)}
              </p>
            )}
            <p className={styles["score"]}>
              <FaStar />
              <span>{score}</span>
            </p>
          </div>
        </header>
      </article>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
};

export default MovieCard;

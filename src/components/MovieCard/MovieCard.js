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

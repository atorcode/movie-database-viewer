import styles from "./MovieCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const {
    id,
    title,
    release_date: release,
    poster_path: image,
    overview,
    vote_average: score,
  } = props;

  console.log(props);
  return (
    <Link to={`/movie/${id}`} className={styles["movie-card"]}>
      <article>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie" />
        <header>
          <div className={styles["title-and-score"]}>
            <h4>{title}</h4>
            <p>{score}</p>
          </div>
          <p className={styles["release-year"]}>{release.substring(0, 4)}</p>
        </header>
      </article>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default MovieCard;

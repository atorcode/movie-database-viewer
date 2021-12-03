import styles from "./MovieCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { id, title, poster_path: image } = props;

  return (
    <Link to={`/movie/${id}`} className={styles["movie-card"]}>
      <article>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie" />
        <h4>{title}</h4>
      </article>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieCard;

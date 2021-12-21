import { useEffect, useRef } from "react";
import styles from "./MovieCard.module.scss";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultImage from "../../images/no-image-found.png";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { handleStorage } from "../../helpers/helpers";

const MovieCard = (props) => {
  const { notifications, setNotifications } = useNotificationContext();

  const pathEl = useRef(null);
  const { id, title, release, poster, score } = props;

  useEffect(() => {
    if (localStorage.getItem(id)) {
      pathEl.current.style.fill = "rgb(255, 25, 25)";
    }
  }, [id]);

  const toggleFill = (element) => {
    localStorage.getItem(id)
      ? (element.style.fill = "rgb(255, 25, 25)")
      : (element.style.fill = "transparent");
  };

  return (
    // the state below is used to pass the MovieCard info to the favorites button in the MovieHero. The favorites button stores this info, and the favorites page uses this info to construct the MovieCard
    <Link to={`/movie/${id}`} className={styles["movie-card"]} state={props}>
      <article>
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImage
          }
          alt={title}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="rgb(255, 25, 25)"
          strokeWidth="2px"
          fill="transparent"
          viewBox="0 0 24 24"
          className={styles["favorite-icon"]}
        >
          <path
            d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
            ref={pathEl}
            // prevent card from becoming focused
            onMouseDown={(e) => e.preventDefault()}
            onClick={(e) => {
              // stop click from registering on the movie card
              e.preventDefault();
              handleStorage(
                { id, title, release, poster, score },
                notifications,
                setNotifications
              );
              toggleFill(e.target);
            }}
          />
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

const oneOrTheOther = (props, first, second) => {
  if (!props.hasOwnProperty(first) && !props.hasOwnProperty(second)) {
    return new Error("neither");
  }
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string,
  poster: PropTypes.string,
  score: PropTypes.number.isRequired,
};

export default MovieCard;

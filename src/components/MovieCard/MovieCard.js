import { useEffect, useRef } from "react";
import styles from "./MovieCard.module.scss";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultImage from "../../images/no-image-found.png";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { v4 as uuidv4 } from "uuid";

const MovieCard = (props) => {
  const { notifications, setNotifications } = useNotificationContext();

  const pathEl = useRef(null);
  const {
    id,
    title,
    release_date: release,
    poster_path: image,
    vote_average: score,
  } = props;

  useEffect(() => {
    if (localStorage.getItem(id)) {
      pathEl.current.style.fill = "rgb(255, 25, 25)";
    }
  }, [id]);

  const handleStorage = () => {
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, true);
    } else {
      localStorage.removeItem(id);
    }
  };

  const toggleFill = (element) => {
    localStorage.getItem(id)
      ? (element.style.fill = "rgb(255, 25, 25)")
      : (element.style.fill = "transparent");
  };

  return (
    <Link to={`/movie/${id}`} className={styles["movie-card"]}>
      <article>
        <img
          src={image ? `https://image.tmdb.org/t/p/w500${image}` : defaultImage}
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
            onClick={(e) => {
              // stop click from registering on the movie card
              e.preventDefault();
              const uuid = uuidv4();
              if (localStorage.getItem(id)) {
                setNotifications([
                  ...notifications,
                  { title, action: "remove", id: uuid },
                ]);
              } else {
                setNotifications([
                  ...notifications,
                  { title, action: "add", id: uuid },
                ]);
              }
              handleStorage();
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

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
};

export default MovieCard;

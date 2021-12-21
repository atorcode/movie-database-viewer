import { useState, useEffect } from "react";
import styles from "./FavoriteButton.module.scss";
import { handleStorage } from "../../helpers/helpers";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";

const FavoriteButton = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const { notifications, setNotifications } = useNotificationContext();
  const { id, title, release, poster, score } = useSelectedMovieContext();

  // useEffect(() => {
  //   setIsLoaded(true);
  //   console.log("loaded");
  // }, []);

  return (
    <>
      {/* fix this */}
      {localStorage.getItem(id) !== undefined && (
        <>
          {
            <button
              className={styles["favorite-button"]}
              onClick={(e) => {
                document.activeElement.blur();
                handleStorage(
                  { id, title, release, poster, score },
                  notifications,
                  setNotifications
                );
              }}
            >
              {localStorage.getItem(id)
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          }
        </>
      )}
    </>
  );
};

export default FavoriteButton;

import styles from "./FavoriteButton.module.scss";
import { handleStorage } from "../../helpers/helpers";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

const FavoriteButton = () => {
  const { notifications, setNotifications } = useNotificationContext();
  const { id, title, release, poster, score } = useSelectedMovieContext();
  const { setFavoriteMovies } = useFavoritesContext();

  return (
    <>
      {id && (
        <>
          {
            <button
              className={styles["button"]}
              onClick={(e) => {
                document.activeElement.blur();
                handleStorage(
                  { id, title, release, poster, score },
                  notifications,
                  setNotifications,
                  setFavoriteMovies
                );
              }}
            >
              <>
                {localStorage.getItem(id)
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </>
            </button>
          }
        </>
      )}
    </>
  );
};

export default FavoriteButton;

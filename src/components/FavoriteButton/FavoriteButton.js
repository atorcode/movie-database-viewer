import styles from "./FavoriteButton.module.scss";
import { handleStorage } from "../../helpers/helpers";
import { useNotificationContext } from "../../contexts/NotificationContext";
// import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { useLocation } from "react-router-dom";

const FavoriteButton = () => {
  const location = useLocation();
  const { notifications, setNotifications } = useNotificationContext();

  return (
    <button
      className={styles["favorite-button"]}
      onClick={(e) => {
        document.activeElement.blur();
        handleStorage(location.state, notifications, setNotifications);
      }}
    >
      Add to favorites
    </button>
  );
};

export default FavoriteButton;

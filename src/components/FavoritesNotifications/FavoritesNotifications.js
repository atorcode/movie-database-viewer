import styles from "./FavoritesNotifications.module.scss";
import FavoritesNotification from "../FavoritesNotification";
import { useNotificationContext } from "../../contexts/NotificationContext";

const FavoritesNotifications = () => {
  const { notifications } = useNotificationContext();
  return (
    <aside className={styles["notifications"]}>
      {notifications.map((notification) => {
        return <FavoritesNotification {...notification} />;
      })}
    </aside>
  );
};

export default FavoritesNotifications;

import { useEffect, useRef } from "react";
import styles from "./FavoritesNotification.module.scss";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useNotificationContext } from "../../contexts/NotificationContext";

const FavoritesNotification = ({ title, action, id }) => {
  const { setNotifications } = useNotificationContext();
  const notificationEl = useRef(null);

  useEffect(() => {
    const height = notificationEl.current.getBoundingClientRect().height;
    const amountToMove = `-${height + 8}px`;

    // life saver
    notificationEl.current.style.setProperty("--marginTop", `${amountToMove}`);

    setTimeout(() => {
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.id !== id)
      );
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={notificationEl} className={styles["favorites-notification"]}>
      {action === "add" ? (
        <>
          <FiPlusCircle className={styles["icon"]} />
          <div>
            <p className={styles["title"]}>{title}</p>
            <p className={styles["add-remove-message"]}>
              has been added to your favorites!
            </p>
          </div>
        </>
      ) : (
        <>
          <FiMinusCircle className={styles["icon"]} />
          <div>
            <p className={styles["title"]}>{title}</p>
            <p className={styles["add-remove-message"]}>
              has been removed from your favorites.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesNotification;

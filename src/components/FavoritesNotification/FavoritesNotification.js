import { useState, useEffect } from "react";
import styles from "./FavoritesNotification.module.scss";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// import { useNotificationContext } from "../../contexts/NotificationContext";

const FavoritesNotification = ({ title, action }) => {
  // const [isShown, setIsShown] = useState(true);

  // const { notifications, setNotifications } = useNotificationContext();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsShown(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <>
      {/* {isShown && ( */}
      <div className={styles["favorites-notification"]}>
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
      {/* )} */}
    </>
  );
};

export default FavoritesNotification;

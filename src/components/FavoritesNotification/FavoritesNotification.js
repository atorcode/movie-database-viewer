import styles from "./FavoritesNotification.module.scss";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const FavoritesNotification = ({ title, action }) => {
  return (
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
  );
};

export default FavoritesNotification;

import styles from "./FavoritesNotification.module.scss";

const FavoritesNotification = ({ title, action }) => {
  return (
    <div className={styles["favorites-notification"]}>
      <p>{title}</p>
      {action === "add" ? (
        <p className={styles["add-remove-message"]}>
          has been added to your favorites!
        </p>
      ) : (
        <p className={styles["add-remove-message"]}>
          has been removed from your favorites.
        </p>
      )}
    </div>
  );
};

export default FavoritesNotification;

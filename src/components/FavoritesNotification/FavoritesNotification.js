import styles from "./FavoritesNotification.module.scss";

const FavoritesNotification = ({ title }) => {
  return (
    <div className={styles["favorites-notification"]}>
      <p>{title}</p>
    </div>
  );
};

export default FavoritesNotification;

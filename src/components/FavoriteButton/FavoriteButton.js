import styles from "./FavoriteButton.module.scss";

const FavoriteButton = () => {
  return (
    <button
      className={styles["favorite-button"]}
      onClick={() => {
        document.activeElement.blur();
      }}
    >
      Add to favorites
    </button>
  );
};

export default FavoriteButton;

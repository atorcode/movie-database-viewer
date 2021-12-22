import styles from "./PlayTrailerButton.module.scss";

const PlayTrailerButton = () => {
  return (
    <button
      className={styles["trailer-button"]}
      onMouseDown={(e) => e.preventDefault()}
    >
      Play Trailer
    </button>
  );
};

export default PlayTrailerButton;

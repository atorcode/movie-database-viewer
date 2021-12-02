import styles from "./LoadButton.module.scss";

const LoadButton = ({ displayedMovies, setDisplayedMovies }) => {
  return (
    <>
      <button
        type="button"
        className={styles["load-more-button"]}
        onClick={() => {}}
      >
        Load more
      </button>
    </>
  );
};

export default LoadButton;

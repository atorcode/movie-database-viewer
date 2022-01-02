import styles from "./ClearButton.module.scss";

const ClearButton = () => {
  return (
    <button
      className={styles["button"]}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={() => {
        localStorage.clear();
      }}
    >
      Clear All
    </button>
  );
};

export default ClearButton;

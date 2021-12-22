import styles from "./PlayTrailerButton.module.scss";
import { FaPlayCircle } from "react-icons/fa";

const PlayTrailerButton = () => {
  return (
    <button
      className={styles["button"]}
      onMouseDown={(e) => e.preventDefault()}
    >
      <FaPlayCircle className={styles["icon"]} />
      Play Trailer
    </button>
  );
};

export default PlayTrailerButton;

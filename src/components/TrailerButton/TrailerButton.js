import styles from "./TrailerButton.module.scss";
import { FaPlayCircle } from "react-icons/fa";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
const TrailerButton = () => {
  const { setVideoIsOpen } = useSelectedMovieContext();

  return (
    <>
      <button
        className={styles["button"]}
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => {
          setVideoIsOpen(true);
        }}
      >
        <FaPlayCircle className={styles["icon"]} />
        Play Trailer
      </button>
    </>
  );
};

export default TrailerButton;

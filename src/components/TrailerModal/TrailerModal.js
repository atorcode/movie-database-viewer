import styles from "./TrailerModal.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";

const TrailerModal = () => {
  const { trailer, setVideoIsOpen } = useSelectedMovieContext();

  console.log(trailer);
  return (
    <div
      className={styles["video-background"]}
      onClick={() => {
        setVideoIsOpen(false);
      }}
    >
      {trailer.key && (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          className={styles["video"]}
        ></iframe>
        // <video
        //   src={`https://www.youtube.com/watch?v=${trailer.key}`}
        //   className={styles["video"]}
        // ></video>
      )}
    </div>
  );
};

export default TrailerModal;

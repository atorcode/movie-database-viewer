import styles from "./TrailerModal.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";

const TrailerModal = () => {
  const { trailer } = useSelectedMovieContext();

  console.log(trailer);
  return (
    <>
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
    </>
  );
};

export default TrailerModal;

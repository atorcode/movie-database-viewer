import { useEffect } from "react";
import styles from "./TrailerModal.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";

const TrailerModal = () => {
  const { trailer, setVideoIsOpen } = useSelectedMovieContext();

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setVideoIsOpen(false);
      }
    };
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles["video-background"]}
      onClick={() => {
        setVideoIsOpen(false);
      }}
    >
      {trailer.key && (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
          title="Movie Trailer"
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

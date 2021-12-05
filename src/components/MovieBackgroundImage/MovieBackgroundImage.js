import styles from "./MovieBackgroundImage.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
const MovieBackgroundImage = () => {
  const { title, image } = useSelectedMovieContext();
  return (
    <div className={styles["image-container"]}>
      <div className={styles["gradient-background"]}></div>
      {image && (
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} />
      )}
    </div>
  );
};

export default MovieBackgroundImage;

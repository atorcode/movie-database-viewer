import styles from "./MovieBackgroundImage.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import imageComingSoon from "../../images/image-coming-soon.png";

const MovieBackgroundImage = () => {
  const { title, image } = useSelectedMovieContext();
  return (
    <div className={styles["image-container"]}>
      <div className={styles["gradient-background"]}></div>
      {/* Render imageComingSoon default image only if the data has been fetched (title is truthy) and there is no associated image. This way, imageComingSoon will not be rendered during load. */}
      {title && !image && <img src={imageComingSoon} alt={title} />}
      {image && (
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} />
      )}
    </div>
  );
};

export default MovieBackgroundImage;

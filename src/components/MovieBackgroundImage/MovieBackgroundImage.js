import styles from "./MovieBackgroundImage.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import imageComingSoon from "../../images/image-coming-soon.png";

const MovieBackgroundImage = () => {
  const { title, image } = useSelectedMovieContext();
  return (
    <div className={styles["image-container"]}>
      <div className={styles["gradient-background"]}></div>
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/original${image}`
            : imageComingSoon
        }
        alt={title}
      />
    </div>
  );
};

export default MovieBackgroundImage;

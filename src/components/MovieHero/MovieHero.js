import styles from "./MovieHero.module.scss";
import MovieInfo from "../../components/MovieInfo";
import MovieBackgroundImage from "../MovieBackgroundImage";
const MovieHero = ({
  title,
  image,
  release,
  score,
  tagline,
  overview,
  formattedRuntime,
}) => {
  const propsToPass = {
    title,
    release,
    score,
    tagline,
    overview,
    formattedRuntime,
  };
  return (
    <section className={styles["movie-hero"]}>
      <MovieInfo {...propsToPass} />
      <MovieBackgroundImage title={title} image={image} />
    </section>
  );
};

export default MovieHero;

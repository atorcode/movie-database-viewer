import styles from "./Movie.module.scss";

const Movie = (props) => {
  const { title, poster_path: image } = props;

  return (
    <article className={styles["movie-card"]}>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie" />
      <h4>{title}</h4>
    </article>
  );
};

export default Movie;

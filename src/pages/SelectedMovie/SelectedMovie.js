// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SelectedMovie.module.scss";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
const SelectedMovie = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetcher
  );

  let title, release, image, score, tagline, overview;
  if (data) {
    ({
      title,
      backdrop_path: image,
      release_date: release,
      vote_average: score,
      tagline,
      overview,
    } = data);
  }

  console.log(data);

  return (
    <main className={styles["main"]}>
      <section className={styles["movie-info"]}>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} />
      </section>
    </main>
  );
};

export default SelectedMovie;

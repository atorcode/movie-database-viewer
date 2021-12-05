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

  let title, release, image, score, tagline, overview, runtime;
  if (data) {
    ({
      title,
      backdrop_path: image,
      release_date: release,
      vote_average: score,
      tagline,
      overview,
      runtime,
    } = data);
  }

  console.log(data);

  return (
    <main className={styles["main"]}>
      <section className={styles["movie-hero"]}>
        <div className={styles["movie-info"]}>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          {/* fix formatting of runtime */}
          <p>{runtime}</p>
          <p>{overview}</p>
        </div>
        <div className={styles["image-container"]}>
          <div className={styles["gradient-background"]}></div>
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt={title}
          />
        </div>
      </section>
    </main>
  );
};

export default SelectedMovie;

// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SelectedMovie.module.scss";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { formatMinutes } from "../../helpers/helpers";
import { FaStar } from "react-icons/fa";
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

  const formattedRuntime = formatMinutes(runtime);
  console.log(formattedRuntime);

  return (
    <main className={styles["main"]}>
      <section className={styles["movie-hero"]}>
        <div className={styles["movie-info"]}>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          <p>{release && release.substring(0, 4)}</p>
          <p>
            {formattedRuntime} <FaStar className={styles["star-icon"]} />
            {score}
          </p>
          <h3>Overview</h3>
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

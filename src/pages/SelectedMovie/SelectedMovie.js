import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SelectedMovie.module.scss";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { formatMinutes } from "../../helpers/helpers";
import MovieHero from "../../components/MovieHero";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propsToPass = {
    title,
    release,
    image,
    score,
    tagline,
    overview,
    formattedRuntime,
  };

  return (
    <main className={styles["main"]}>
      <MovieHero {...propsToPass} />
    </main>
  );
};

export default SelectedMovie;

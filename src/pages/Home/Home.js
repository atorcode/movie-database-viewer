import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import useSWR from "swr";
import MovieCards from "../../components/MovieCards";
import LoadButton from "../../components/LoadButton";
import fetcher from "../../helpers/fetcher";
import MovieGroupingHeader from "../../components/MovieGroupingHeader";

const Home = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setDisplayedMovies(data.results);
    }
  }, [data]);

  const propsToPass = {
    displayedMovies,
    setDisplayedMovies,
    page,
    setPage,
  };

  return (
    <main className={styles["main-content"]}>
      <section>
        <MovieGroupingHeader header="Trending Movies" />
        <div className={styles["movie-cards-container"]}>
          <MovieCards moviesToDisplay={displayedMovies} />
        </div>
        <LoadButton {...propsToPass} />
      </section>
    </main>
  );
};

export default Home;

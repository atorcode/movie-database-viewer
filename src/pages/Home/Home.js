import styles from "./Home.module.scss";
import MovieCard from "../../components/MovieCard";
import LoadButton from "../../components/_basic/LoadButton";
import PropTypes from "prop-types";
const Home = (props) => {
  const { displayedMovies } = props;
  return (
    <main className={styles["main-content"]}>
      <section>
        <h1>Trending Movies</h1>
        {displayedMovies && (
          <div className={styles["movies-container"]}>
            {displayedMovies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        )}
        <LoadButton {...props} />
      </section>
    </main>
  );
};

Home.propTypes = {
  displayedMovies: PropTypes.array.isRequired,
};

export default Home;

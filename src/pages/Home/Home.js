import styles from "./Home.module.scss";
import MovieCard from "../../components/MovieCard";
import LoadButton from "../../components/_basic/LoadButton";
import PropTypes from "prop-types";
const Home = (props) => {
  const { displayedMovies } = props;

  const DisplayedMovies = ({ moviesToDisplay, header }) => {
    return (
      moviesToDisplay && (
        <>
          <h1>{header}</h1>
          <div className={styles["movies-container"]}>
            {moviesToDisplay.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        </>
      )
    );
  };

  return (
    <main className={styles["main-content"]}>
      <section>
        <DisplayedMovies
          moviesToDisplay={displayedMovies}
          header={"Trending Movies"}
        />
        <LoadButton {...props} />
      </section>
    </main>
  );
};

Home.propTypes = {
  displayedMovies: PropTypes.array.isRequired,
};

export default Home;

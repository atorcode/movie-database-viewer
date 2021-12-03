import styles from "./Home.module.scss";
import Movie from "../../components/Movie";
import LoadButton from "../../components/_basic/LoadButton";
import PropTypes from "prop-types";
const Home = (props) => {
  const { displayedMovies } = props;
  return (
    <main className={styles["main-content"]}>
      <section>
        <h1>Popular Movies</h1>
        <div className={styles["movies-container"]}>
          {displayedMovies &&
            displayedMovies.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
        </div>
        <LoadButton {...props} />
      </section>
    </main>
  );
};

Home.propTypes = {
  displayedMovies: PropTypes.array.isRequired,
};

export default Home;

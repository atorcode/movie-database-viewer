import styles from "./Home.module.scss";
import MovieCards from "../../components/MovieCards";
import LoadButton from "../../components/_basic/LoadButton";
import PropTypes from "prop-types";
const Home = (props) => {
  const { displayedMovies } = props;

  return (
    <main className={styles["main-content"]}>
      <section>
        <MovieCards
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

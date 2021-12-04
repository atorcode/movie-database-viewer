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
  console.log(data);
  return <main className={styles["main"]}>asdf</main>;
};

export default SelectedMovie;

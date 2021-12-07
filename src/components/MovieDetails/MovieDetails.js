import styles from "./MovieDetails.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
const MovieDetails = () => {
  const {
    title,
    genreInfo,
    production,
    directedBy,
    writtenBy,
    budget,
    revenue,
  } = useSelectedMovieContext();

  console.log(production, directedBy, writtenBy);
  return (
    <section>
      <p>{budget}</p>
      <p>{revenue}</p>
      <p>Genres</p>
      <ul>
        {genreInfo &&
          genreInfo.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>
      <ul>
        {/* {directedBy.map(()=>{

        })} */}
      </ul>
    </section>
  );
};

export default MovieDetails;

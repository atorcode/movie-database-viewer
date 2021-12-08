import styles from "./MovieDetails.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
const MovieDetails = () => {
  const {
    formattedRelease,
    genreInfo,
    production,
    directedBy,
    writtenBy,
    budget,
    revenue,
  } = useSelectedMovieContext();

  // Takes an array and the singular form of a string then returns a plural form if the given array has more than one element.
  const singularOrPlural = (arr, singularForm) => {
    if (!Array.isArray(arr) || typeof singularForm !== "string") {
      return;
    }
    if (arr.length === 1) {
      return singularForm;
    } else if (arr.length > 1) {
      if (singularForm.slice(-1).toLowerCase() === "y") {
        return singularForm.slice(0, -1) + "ies";
      } else {
        return singularForm + "s";
      }
    }
  };

  return (
    <section>
      <p>{formattedRelease}</p>
      <p>{budget}</p>
      <p>{revenue}</p>
      <h3>{singularOrPlural(genreInfo, "Genre")}</h3>
      <ul>
        {genreInfo &&
          genreInfo.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>
      <h3>{singularOrPlural(directedBy, "Director")}</h3>
      <ul>
        {directedBy &&
          directedBy.map((director) => {
            return <li key={director.id}>{director.name}</li>;
          })}
      </ul>
      <h3>{singularOrPlural(writtenBy, "Writer")}</h3>
      <ul>
        {writtenBy &&
          writtenBy.map((writer) => {
            return <li key={writer.id}>{writer.name}</li>;
          })}
      </ul>
      <h3>{singularOrPlural(production, "Production company")}</h3>
      <ul>
        {production &&
          production.map((company) => {
            return <li key={company.id}>{company.name}</li>;
          })}
      </ul>
    </section>
  );
};

export default MovieDetails;

import styles from "./MovieDetails.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { singularOrPlural } from "../../helpers/helpers";
const MovieDetails = () => {
  const {
    score,
    scoreVotes,
    formattedRelease,
    genreInfo,
    production,
    directedBy,
    writtenBy,
    spokenLanguages,
    budget,
    revenue,
  } = useSelectedMovieContext();

  const renderList = (arr) => {
    return (
      <ul>
        {arr &&
          arr.map((item) => {
            return (
              <li key={item.id || item.iso_639_1}>
                {item.english_name || item.name}
              </li>
            );
          })}
      </ul>
    );
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section>
      <h4>TMDB User Score</h4>
      <p>
        {score}/10 based on {scoreVotes} votes
      </p>
      <h4>Release Date</h4>
      <p>{formattedRelease}</p>
      {formatter.format(budget) !== "$0" && (
        <>
          <h4>Budget</h4>
          <p>{formatter.format(budget)}</p>
        </>
      )}
      {formatter.format(revenue) !== "$0" && (
        <>
          <h4>Revenue</h4>
          <p>{formatter.format(revenue)}</p>
        </>
      )}
      <h4>{singularOrPlural(genreInfo, "Genre")}</h4>
      {renderList(genreInfo)}
      <h4>{singularOrPlural(directedBy, "Director")}</h4>
      {renderList(directedBy)}
      <h4>{singularOrPlural(writtenBy, "Writer")}</h4>
      {renderList(writtenBy)}
      <h4>{singularOrPlural(production, "Production Company")}</h4>
      {renderList(production)}
      <h4>{singularOrPlural(spokenLanguages, "Spoken Language")}</h4>
      {renderList(spokenLanguages)}
    </section>
  );
};

export default MovieDetails;

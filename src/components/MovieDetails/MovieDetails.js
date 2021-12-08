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

  const renderList = (arr, categorySingularForm) => {
    if (
      !Array.isArray(arr) ||
      arr.length < 1 ||
      typeof categorySingularForm !== "string"
    ) {
      return null;
    }
    return (
      <>
        <h4>{singularOrPlural(arr, categorySingularForm)}</h4>
        <ul>
          {arr.map((item) => {
            return (
              <li key={item.id || item.iso_639_1}>
                {item.english_name || item.name}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const renderMoney = (category, amount) => {
    if (typeof amount !== "number" || typeof category !== "string") {
      return;
    }
    return (
      formatter.format(amount) !== "$0" && (
        <>
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          <p>{formatter.format(amount)}</p>
        </>
      )
    );
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section className={styles["movie-details"]}>
      {/* Score and release dates will be rendered regardless of values */}
      <h4>TMDB User Score</h4>
      <p>
        {score}/10 based on {scoreVotes} votes
      </p>
      <h4>Release Date</h4>
      <p>{formattedRelease || "N/A"}</p>
      {/* All JSX below this line is conditionally rendered */}
      {renderMoney("Budget", budget)}
      {renderMoney("Revenue", revenue)}
      {renderList(directedBy, "Director")}
      {renderList(writtenBy, "Writer")}
      {renderList(production, "Production Company")}
      {renderList(genreInfo, "Genre")}
      {renderList(spokenLanguages, "Spoken Language")}
    </section>
  );
};

export default MovieDetails;

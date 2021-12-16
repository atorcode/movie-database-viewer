import styles from "./MovieDetails.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import { formatDate, singularOrPlural } from "../../helpers/helpers";

const MovieDetails = () => {
  const {
    score,
    scoreVotes,
    release,
    genreInfo,
    production,
    directedBy,
    writtenBy,
    spokenLanguages,
    budget,
    revenue,
  } = useSelectedMovieContext();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const LabeledList = ({ categorySingularForm, arr }) => {
    if (
      !Array.isArray(arr) ||
      arr.length < 1 ||
      typeof categorySingularForm !== "string"
    ) {
      return null;
    }
    return (
      <>
        <h4>{singularOrPlural(categorySingularForm, arr)}</h4>
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

  const MoneyGrouping = ({ category, amount }) => {
    if (typeof amount !== "number" || typeof category !== "string") {
      return null;
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

  return (
    <section className={styles["movie-details"]}>
      <h2>Movie Details</h2>
      {/* Score and release dates will be rendered regardless of values */}
      <h4>TMDB User Score</h4>
      <p>
        {score}/10 based on {scoreVotes} votes
      </p>
      <h4>Release Date</h4>
      <p>{formatDate(release) || "N/A"}</p>
      {/* All JSX below this line is conditionally rendered */}
      <MoneyGrouping category={"Budget"} amount={budget} />
      <MoneyGrouping category={"Revenue"} amount={revenue} />
      <LabeledList categorySingularForm={"Director"} arr={directedBy} />
      <LabeledList categorySingularForm={"Writer"} arr={writtenBy} />
      <LabeledList
        categorySingularForm={"Production Company"}
        arr={production}
      />
      <LabeledList categorySingularForm={"Genre"} arr={genreInfo} />
      <LabeledList
        categorySingularForm={"Spoken Language"}
        arr={spokenLanguages}
      />
    </section>
  );
};

export default MovieDetails;

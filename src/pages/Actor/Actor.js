import { useParams } from "react-router-dom";
import styles from "./Actor.module.scss";
import fetcher from "../../helpers/fetcher";
import { formatDate } from "../../helpers/helpers";
import useSWR from "swr";
const Actor = () => {
  const { actorId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=movie_credits`,
    fetcher
  );

  let name,
    birthday,
    formattedBirthday,
    deathday,
    formattedDeathday,
    biography,
    birthPlace,
    image,
    movieCredits,
    moviesActedIn;

  if (data) {
    ({
      name,
      birthday,
      deathday,
      biography,
      place_of_birth: birthPlace,
      profile_path: image,
      movie_credits: movieCredits,
    } = data);
    moviesActedIn = movieCredits.cast;

    formattedBirthday = formatDate(birthday);
    formattedDeathday = formatDate(deathday);
  }

  return (
    <main className={styles["main-content"]}>
      <section className={styles["actor-profile"]}>
        <img
          src={image && `https://image.tmdb.org/t/p/w400${image}`}
          alt={name}
        />
        <div className={styles["actor-info"]}>
          <h1>{name}</h1>
          <p>
            {formattedBirthday} - {formattedDeathday}
          </p>
          <p>{birthPlace}</p>
          <p>{biography}</p>
        </div>
      </section>
      <section>
        {moviesActedIn &&
          moviesActedIn.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
      </section>
    </main>
  );
};

export default Actor;

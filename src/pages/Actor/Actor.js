import { useParams } from "react-router-dom";
import styles from "./Actor.module.scss";
import fetcher from "../../helpers/fetcher";
import useSWR from "swr";
import ActorInfo from "../../components/ActorInfo";

const Actor = () => {
  const { actorId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=movie_credits`,
    fetcher
  );

  let name,
    birthday,
    deathday,
    biography,
    birthplace,
    image,
    movieCredits,
    moviesAsActor;

  if (data) {
    ({
      name,
      birthday,
      deathday,
      biography,
      place_of_birth: birthplace,
      profile_path: image,
      movie_credits: movieCredits,
    } = data);
    moviesAsActor = movieCredits.cast;
  }

  console.log(moviesAsActor);

  const propsToPass = {
    name,
    birthday,
    birthplace,
    deathday,
    biography,
  };
  return (
    <main className={styles["main-content"]}>
      <section className={styles["actor-profile"]}>
        <img
          src={image && `https://image.tmdb.org/t/p/w300${image}`}
          alt={name}
        />
        <ActorInfo {...propsToPass} />
      </section>
      {moviesAsActor && (
        <section className={styles["movies-section"]}>
          {moviesAsActor.map((movie) => {
            return <></>;
          })}
        </section>
      )}
    </main>
  );
};

export default Actor;

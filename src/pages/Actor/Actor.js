import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Actor.module.scss";
import fetcher from "../../helpers/fetcher";
import useSWR from "swr";
import ActorInfo from "../../components/ActorInfo";
import MovieCards from "../../components/MovieCards";
import defaultProfilePicture from "../../images/default-profile-picture.png";

const Actor = () => {
  const { actorId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=movie_credits`,
    fetcher
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          src={
            image
              ? `https://image.tmdb.org/t/p/w300${image}`
              : defaultProfilePicture
          }
          alt={name}
        />
        <ActorInfo {...propsToPass} />
      </section>
      <section className={styles["movie-cards-container"]}>
        <MovieCards moviesToDisplay={moviesAsActor} header={"Filmography"} />
      </section>
    </main>
  );
};

export default Actor;

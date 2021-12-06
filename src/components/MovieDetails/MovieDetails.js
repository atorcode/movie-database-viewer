import styles from "./MovieDetails.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import CastMember from "../CastMember";
const MovieDetails = () => {
  const { cast } = useSelectedMovieContext();
  return (
    <section className={styles["cast-section"]}>
      <h2>Cast</h2>
      <div>
        {cast &&
          cast.map((castMember) => {
            const { id, name, character, profile_path } = castMember;
            return (
              <CastMember
                key={id}
                name={name}
                character={character}
                profile_path={profile_path}
              />
            );
          })}
      </div>
    </section>
  );
};

export default MovieDetails;

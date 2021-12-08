import styles from "./Cast.module.scss";
import { useSelectedMovieContext } from "../../contexts/SelectedMovieContext";
import CastMember from "../CastMember";
const Cast = () => {
  const { cast } = useSelectedMovieContext();
  return (
    <section className={styles["cast-section"]}>
      <h2>Cast</h2>
      {cast && (
        <div>
          {cast.map((castMember) => {
            const { id, name, character, profile_path: image } = castMember;
            return (
              <CastMember
                key={id}
                id={id}
                name={name}
                character={character}
                image={image}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Cast;

import styles from "./CastMember.module.scss";
import defaultProfilePicture from "../../images/default-profile-picture.png";
import PropTypes from "prop-types";
const CastMember = ({ name, character, profile_path }) => {
  return (
    <article className={styles["cast-member"]}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : defaultProfilePicture
        }
        alt={name}
      />
      <p>{name}</p>
      <p>
        <span>as</span> {character}
      </p>
    </article>
  );
};

CastMember.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};

export default CastMember;

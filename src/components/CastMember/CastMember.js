import styles from "./CastMember.module.scss";
import defaultProfilePicture from "../../images/default-profile-picture.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CastMember = ({ id, name, character, profile_path }) => {
  return (
    <Link to={`/actor/${id}`} className={styles["actor-link"]}>
      <article className={styles["cast-member"]}>
        <div className={styles["image-container"]}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : defaultProfilePicture
            }
            alt={name}
          />
        </div>
        <p>{name}</p>
        <p className={styles["character"]}>
          <span>as</span> {character}
        </p>
      </article>
    </Link>
  );
};

CastMember.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};

export default CastMember;

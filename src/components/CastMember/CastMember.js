import styles from "./CastMember.module.scss";
import defaultProfilePicture from "../../images/default-profile-picture.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CastMember = ({ id, name, character, image }) => {
  return (
    <Link to={`/actor/${id}`} className={styles["actor-link"]}>
      <article className={styles["cast-member"]}>
        <div className={styles["image-container"]}>
          <img
            src={
              image
                ? `https://image.tmdb.org/t/p/w200${image}`
                : defaultProfilePicture
            }
            alt={name}
          />
        </div>
        <p>{name}</p>
        <p className={styles["character"]}>
          {character && (
            <>
              <span>as</span> {character}
            </>
          )}
        </p>
      </article>
    </Link>
  );
};

CastMember.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CastMember;

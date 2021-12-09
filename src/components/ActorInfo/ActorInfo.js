import styles from "./ActorInfo.module.scss";
import { formatDate } from "../../helpers/helpers";
import PropTypes from "prop-types";
const ActorInfo = ({ name, birthday, birthplace, deathday, biography }) => {
  return (
    <div className={styles["actor-info"]}>
      <h1>{name}</h1>
      {birthday && (
        <>
          <h4>Born</h4>
          <p>
            {formatDate(birthday)} {birthplace && <>in {birthplace}</>}
          </p>
        </>
      )}
      {deathday && (
        <>
          <h4>Died</h4>
          <p>{formatDate(deathday)}</p>
        </>
      )}
      {biography && (
        <>
          <h4>Biography</h4>
          <p>{biography}</p>
        </>
      )}
    </div>
  );
};

ActorInfo.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
  birthplace: PropTypes.string,
  deathday: PropTypes.string,
  biography: PropTypes.string,
};

export default ActorInfo;

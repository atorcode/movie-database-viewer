import PropTypes from "prop-types";
import styles from "./MovieGroupingHeader.module.scss";

const MovieGroupingHeader = ({ header, position }) => {
  return (
    <>
      {position === "left" ? (
        <h1 className={styles["header-left"]}>{header}</h1>
      ) : (
        <h1 className={styles["header-center"]}>{header}</h1>
      )}
    </>
  );
};

MovieGroupingHeader.propTypes = {
  header: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default MovieGroupingHeader;

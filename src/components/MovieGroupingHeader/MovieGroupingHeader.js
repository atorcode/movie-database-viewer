import PropTypes from "prop-types";
import styles from "./MovieGroupingHeader.module.scss";

const MovieGroupingHeader = ({ header }) => {
  return <h1 className={styles["header"]}>{header}</h1>;
};

MovieGroupingHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default MovieGroupingHeader;

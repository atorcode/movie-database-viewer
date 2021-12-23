import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className={styles["error"]}>
      <h1>
        <span className={styles["sorry-text"]}>Sorry!</span> The page you
        requested doesn't exist.
      </h1>
      <Link to="/" className={styles["home-link"]}>
        Go back home
      </Link>
    </main>
  );
};

export default Error;

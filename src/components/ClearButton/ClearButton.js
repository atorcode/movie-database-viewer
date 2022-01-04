import styles from "./ClearButton.module.scss";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
const ClearButton = () => {
  const { setFavoriteMovies } = useFavoritesContext();
  return (
    <button
      className={styles["button"]}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={() => {
        localStorage.clear();
        setFavoriteMovies([]);
      }}
    >
      Clear All
    </button>
  );
};

export default ClearButton;

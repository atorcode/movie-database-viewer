import React, { useContext, useState } from "react";

const FavoritesContext = React.createContext();

const FavoritesProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    Object.keys(localStorage).map((id) => {
      return JSON.parse(localStorage.getItem(id));
    })
  );

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// hook
const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

export { FavoritesProvider, useFavoritesContext };

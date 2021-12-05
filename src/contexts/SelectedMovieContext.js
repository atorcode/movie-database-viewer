import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import { formatMinutes } from "../helpers/helpers";

const SelectedMovieContext = React.createContext();

const SelectedMovieProvider = ({ children }) => {
  const { movieId } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetcher
  );

  let title, release, image, score, tagline, overview, runtime;
  if (data) {
    ({
      title,
      backdrop_path: image,
      release_date: release,
      vote_average: score,
      tagline,
      overview,
      runtime,
    } = data);
  }
  const formattedRuntime = formatMinutes(runtime);
  return (
    <SelectedMovieContext.Provider
      value={{
        title,
        release,
        image,
        score,
        tagline,
        overview,
        formattedRuntime,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
};

// hook
const useSelectedMovieContext = () => {
  return useContext(SelectedMovieContext);
};
export { SelectedMovieProvider, useSelectedMovieContext };
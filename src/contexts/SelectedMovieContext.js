import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import { formatMinutes } from "../helpers/helpers";

const SelectedMovieContext = React.createContext();

const SelectedMovieProvider = ({ children }) => {
  const { movieId } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits,release_dates`,
    fetcher
  );

  let title, release, image, score, tagline, overview, runtime, cast, rating;
  if (data) {
    ({
      title,
      backdrop_path: image,
      release_date: release,
      vote_average: score,
      tagline,
      overview,
      runtime,
      cast,
    } = data);
  }
  const formattedRuntime = formatMinutes(runtime);
  if (data) {
    ({ cast } = data.credits);
    // Find the first release date that has a certified rating
    rating = data.release_dates.results
      .find((result) => {
        return result.iso_3166_1 === "US";
      })
      .release_dates.find((date) => {
        return date.certification !== "";
      }).certification;
  }

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
        cast,
        rating,
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

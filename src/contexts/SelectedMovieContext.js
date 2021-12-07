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

  let title,
    release,
    image,
    score,
    tagline,
    overview,
    runtime,
    formattedRuntime,
    cast,
    rating,
    budget,
    revenue,
    spokenLanguages,
    production,
    directedBy,
    genreInfo,
    writtenBy;
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
      budget,
      revenue,
      spoken_languages: spokenLanguages,
      production_companies: production,
      genres: genreInfo,
    } = data);
    ({ cast } = data.credits);
    directedBy = data.credits.crew.filter((crewMember) => {
      return crewMember.job.toLowerCase() === "director";
    });
    writtenBy = data.credits.crew.filter((crewMember) => {
      return crewMember.job.toLowerCase() === "writer";
    });

    // Find the first release date that has a certified rating
    rating = data.release_dates.results
      .find((result) => {
        return result.iso_3166_1 === "US";
      })
      .release_dates.find((date) => {
        return date.certification !== "";
      }).certification;
    formattedRuntime = formatMinutes(runtime);
  }
  console.log(genreInfo);

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
        budget,
        revenue,
        production,
        spokenLanguages,
        directedBy,
        writtenBy,
        genreInfo,
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

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";

const SelectedMovieContext = React.createContext();

const SelectedMovieProvider = ({ children }) => {
  const { movieId } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits,release_dates`,
    fetcher
  );

  let title,
    image,
    score,
    scoreVotes,
    tagline,
    overview,
    runtime,
    release,
    cast,
    rating,
    budget,
    revenue,
    spokenLanguages,
    production,
    directedBy,
    writtenBy,
    genreInfo;
  if (data) {
    ({
      title,
      backdrop_path: image,
      release_date: release,
      vote_average: score,
      vote_count: scoreVotes,
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
      return crewMember.job.toLowerCase() === "screenplay";
    });

    console.log(data);

    // Find the first release date that has a certified rating. If no release has a certified rating, return "NR".
    let USreleases = data.release_dates.results.find((result) => {
      return result.iso_3166_1 === "US";
    });
    if (USreleases) {
      let USreleasesWithRating = USreleases.release_dates.filter(
        (releaseDate) => releaseDate.certification !== ""
      );
      if (USreleasesWithRating.length === 0) {
        rating = "NR";
      } else {
        rating = USreleasesWithRating[0].certification;
      }
    } else {
      rating = "NR";
    }
  }

  return (
    <SelectedMovieContext.Provider
      value={{
        title,
        release,
        image,
        score,
        scoreVotes,
        runtime,
        tagline,
        overview,
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

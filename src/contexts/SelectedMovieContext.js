import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";

const SelectedMovieContext = React.createContext();

const SelectedMovieProvider = ({ children }) => {
  const { movieId } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits,release_dates,videos`,
    fetcher
  );

  // Define variables to pass on
  let id,
    title,
    image,
    poster,
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
    genreInfo,
    trailer;

  // Set variables here. Many are simply set by destructuring, others require a little more logic.
  if (data) {
    ({
      id,
      title,
      backdrop_path: image,
      poster_path: poster,
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

    // Find official trailer if it exists. If not, look for a trailer with a name containing the words "official" and "trailer", e.g., "official teaser trailer". If still no matches, find any trailer.
    trailer = data.videos.results.find((result) => {
      return result.name.toLowerCase() === "official trailer";
    });
    if (!trailer) {
      trailer = data.videos.results.find((result) => {
        let regex = /official.*trailer/i;
        return regex.test(result.name);
      });
    }
    if (!trailer) {
      trailer = data.videos.results.find((result) => {
        return result.type.toLowerCase() === "trailer";
      });
    }

    console.log(trailer);
  }

  return (
    <SelectedMovieContext.Provider
      value={{
        id,
        title,
        release,
        image,
        poster,
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
        trailer,
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

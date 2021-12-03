import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import useSWR from "swr";
import fetcher from "./helpers/fetcher";

function App() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setDisplayedMovies(data.results);
    }
  }, [data]);

  const propsToPass = {
    displayedMovies,
    setDisplayedMovies,
    page,
    setPage,
  };

  return (
    <>
      <Navbar />
      <Movies {...propsToPass} />
      <Footer />
    </>
  );
}

export default App;

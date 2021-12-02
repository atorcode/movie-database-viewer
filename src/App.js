import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const popularMovies = useFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  ).results;
  useEffect(() => {
    setDisplayedMovies(popularMovies);
  }, [popularMovies]);

  return (
    <>
      <Navbar />
      <Movies displayedMovies={displayedMovies} />
      <Footer />
    </>
  );
}

export default App;

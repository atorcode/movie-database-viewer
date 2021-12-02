import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const { fetchData, data } = useFetch();

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
  }, []);

  useEffect(() => {
    if (data) {
      setDisplayedMovies(data.results);
      console.log(data.results);
    }
  }, [data]);

  const propsToPass = {
    displayedMovies,
    setDisplayedMovies,
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

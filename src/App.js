import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSWR from "swr";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import fetcher from "./helpers/fetcher";
import Error from "./pages/Error";

function App() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const { data } = useSWR(
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
      <Router>
        <Routes>
          <Route path="/" element={<Movies {...propsToPass} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SelectedMovieProvider } from "./contexts/SelectedMovieContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/";
import SelectedMovie from "./pages/SelectedMovie";
import Actor from "./pages/Actor";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import FavoritesNotification from "./components/FavoritesNotification";
import { useNotificationContext } from "./contexts/NotificationContext";

function App() {
  const { showNotification } = useNotificationContext();

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie/:movieId"
            element={
              <SelectedMovieProvider>
                <SelectedMovie />
              </SelectedMovieProvider>
            }
          />
          <Route path="/actor/:actorId" element={<Actor />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      {showNotification && <FavoritesNotification />}
    </>
  );
}

export default App;

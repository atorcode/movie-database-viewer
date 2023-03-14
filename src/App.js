import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FavoritesNotifications from "./components/FavoritesNotifications";

import Home from "./pages/Home/";
import SelectedMovie from "./pages/SelectedMovie";
import Actor from "./pages/Actor";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";

import { useNotificationContext } from "./contexts/NotificationContext";
import { SelectedMovieProvider } from "./contexts/SelectedMovieContext";

function App() {
  const { notifications } = useNotificationContext();

  return (
    <>
      <Router>
        <ScrollToTop />
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
      {notifications && <FavoritesNotifications />}
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
function App() {
  const data = useFetch("https://course-api.com/react-tours-project");
  console.log(data);
  return (
    <>
      <Navbar />
      <Movies />
      <Footer />
    </>
  );
}

export default App;

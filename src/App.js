import { Route, Routes } from "react-router-dom";
import EHome from "./EnglishMovie/EHome/EHome";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import EMovieDetail from "./EnglishMovie/EMovieDetail/EMovieDetail";
import EMovieList from "./EnglishMovie/EMovieList/EMovieList";
import PageNotFound from "./PageNotFound/PageNotFound";
import "./App.css";
import Home from "././AmahricMovie/Home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EHome />}></Route>
        <Route path="/movielist" element={<EMovieList />} />
        <Route path="/movielist/:movieID" element={<EMovieDetail />} />
        <Route path="/amaharic" element={<Home />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

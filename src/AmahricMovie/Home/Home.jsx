import React from "react";
import { useSelector } from "react-redux";
import ShowList from "../ShowList/ShowList";
import DramaList from "../DramaList/DramaList";
import MovieList from "../MovieList/MovieList";
import "./Home.css";
import "../../common/colors.css";
const Home = () => {

  return (
    <div className="container">
      <h2 className="title">Ethiopian Movies, Dramas and TV Shows </h2>
        <MovieList className="am-container" />

      <ShowList className="am-container" />
      <DramaList className="am-container" />
    </div>
  );
};

export default Home;

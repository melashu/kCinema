import React from "react";
import "./EHome.css";
import "../../common/colors.css";
import EMovieList from "../EMovieList/EMovieList";
const EHome = () => {
  return (
    <div className="container">
      <h2 className="title">Your Movie List</h2>
      <EMovieList />
    </div>
  );
};

export default EHome;

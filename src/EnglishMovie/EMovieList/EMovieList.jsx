import React from "react";
import { useSelector } from "react-redux";
import { getState } from "../../Redux/MovieSlices";
import "./EMovieList.css";
import "../../common/colors.css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

const EMovieList = () => {
  const movieList = useSelector(getState);
  const cardList = movieList.map((movie, index) => (
    <Link key={index + 1} to={`/movielist/${movie.imdbID}`}>
      <MovieCard data={movie} />
    </Link>
  ));
  return (
    <div className="movielist-container">
      {movieList ? (
        cardList
      ) : (
        <div className="loadding-status">Movie not found!</div>
      )}
    </div>
  );
};

export default EMovieList;

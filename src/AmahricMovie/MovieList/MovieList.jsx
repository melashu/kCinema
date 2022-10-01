import React from "react";
import { getEthioMovies } from "../../Redux/MovieSlices";
import { useSelector } from "react-redux";
import Cards from "../Cards/Card";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = useSelector(getEthioMovies);

  return (
    <>
      <h1 className="am-title">Ethiopian Movies</h1>
      <div className="am-container">
          {movies.map((movie, index) => (
            <Link key={index + 1} to={`/amaharic/${movie.id}`}>
              <Cards key={index} data={movie} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default MovieList;

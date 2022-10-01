import React from "react";
import "./MovieCard.css";
const MovieCard = ({ data }) => {
  return (
      <div className="card-container">
        <div className="card-inner">
          <div className="banner-image">
            <img src={data.Poster} alt="Poster" />
          </div>
          <hr />
          <div className="bottom-card">
            <span>
              {data.Title} Released in {data.Year}
            </span>
          </div>
        </div>
      </div>

  );
};

export default MovieCard;

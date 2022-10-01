import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="banner-image">
          <img src={data.photo} alt="Poster" />
        </div>
        <hr />
        <div className="bottom-card">
          <span>
            {data.title} Released in {data.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;

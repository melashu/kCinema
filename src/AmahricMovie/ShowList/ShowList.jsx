import React from "react";
import { getEthioShows } from "../../Redux/MovieSlices";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../Cards/Card";
const ShowList = () => {
  const shows = useSelector(getEthioShows);

  return (
    <>
      <h1 className="am-title">Ethiopian Movies</h1>
      <div className="am-container">
        {shows.map((show, index) => (
          <Link key={index + 1} to={`/amaharic/${show.id}`}>
            <Cards key={index} data={show} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShowList;

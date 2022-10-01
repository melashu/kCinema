import { useParams } from "react-router-dom";
import {
  getMovieById,
  fetchMovieByID,
  RemoveMovieById,
} from "../../Redux/MovieSlices";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "./EMovieDetail.css";
import "../../common/colors.css";
const EMovieDetail = () => {
  const list = useSelector(getMovieById);
  const { movieID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieByID(movieID));
    return () => {
      dispatch(RemoveMovieById());
    };
  }, [dispatch, movieID]);

  return (
    <div className="detail-container">
      {Object.keys(list).length !== 0 ? (
        <div className="detail-card">
          <div className="detail-title">{list.Title}</div>
          <div className="top-description">
            <span>Year : {list.Year} | </span>
            <span>Run Time : {list.Runtime} | </span>
            <span>Rating : {list.imdbRating} | </span>
            <span>Metascore : {list.Metascore} | </span>
          </div>
          <hr />
          <div className="ditail-body-container">
            <div className="detail-body">
              <p>Released : {list.Released}</p>
              <p>Genre : {list.Genre}</p>
              <p>Director : {list.Director}</p>
              <p>Writer : {list.Writer}</p>
              <p>Language : {list.Language}</p>
              <p>Awards : {list.Awards}</p>
              <p>Metascore : {list.Metascore}</p>
              <p>BoxOffice : {list.BoxOffice}</p>
              <p>Actors : {list.Actors}</p>
              <p>Country : {list.Country}</p>
            </div>
            <img className="detail-poster" src={list.Poster} alt="Poster" />
          </div>
        </div>
      ) : (
        <div className="loadding-status">Wait</div>
      )}
    </div>
  );
};

export default EMovieDetail;

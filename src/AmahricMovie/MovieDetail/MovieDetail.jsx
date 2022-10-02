import { useParams } from "react-router-dom";
import {
  getMovieById,
  RemoveMovieById,
  FindMovieById,
} from "../../Redux/MovieSlices";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "../../EnglishMovie/EMovieDetail/EMovieDetail.css";
import "../../common/colors.css";
const MovieDetail = () => {
  const list = useSelector(getMovieById);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FindMovieById(id));
    return () => {
      dispatch(RemoveMovieById());
    };
  }, [dispatch, id]);

  return (
    <div className="detail-container">
      {Object.keys(list).length !== 0 ? (
        <div className="detail-card">
          <div className="detail-title">{list.title}</div>
          <div className="top-description">
            <span>Year : {list.year} | </span>
            <span>Run Time : {list.length} | </span>
            <span>View on YouTube : {list.view} | </span>
          </div>
          <hr />
          <div className="ditail-body-container">
            <div className="detail-body">
              <p>Released : {list.year}</p>
              <p>Country : Ethiopia</p>
            </div>
            <img className="detail-poster" src={list.photo} alt="Poster" />
          </div>
        </div>
      ) : (
        <div className="loadding-status">Wait</div>
      )}
    </div>
  );
};

export default MovieDetail;

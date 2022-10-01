import React, { useEffect, useState } from "react";
import "./EHome.css";
import "../../common/colors.css";
import EMovieList from "../EMovieList/EMovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieAsyncThunk, getSearchTerm } from "../../Redux/MovieSlices";
const EHome = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("movie");
  const term = useSelector(getSearchTerm);
  useEffect(() => {
    dispatch(fetchMovieAsyncThunk({ type, term }));
  }, [dispatch, type, term]);
  return (
    <div className="container">
      <h2 className="title">Top Movie and Series List </h2>
      <label className="selector-lable">
        Select Catagory
        <select
          name=""
          id=""
          className="type-selector"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </label>
      <EMovieList />
    </div>
  );
};

export default EHome;

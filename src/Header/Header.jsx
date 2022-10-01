import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../common/colors.css";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieAsyncThunk, getSearchTerm } from "../Redux/MovieSlices";
import { SearchTerm } from "../Redux/MovieSlices";
const Header = () => {
  const searchTerm = useSelector(getSearchTerm);
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHundleer = (e) => {
    e.preventDefault();
    dispatch(SearchTerm(term));

    dispatch(fetchMovieAsyncThunk({ searchTerm }));
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">kCinema</Link>
      </div>
      <form className="search-form" onSubmit={submitHundleer}>
        <input
          className="search"
          required
          type="search"
          placeholder="Search movies"
          onChange={(e) => {
            const searchTerm = e.target.value.trim();
            setTerm(searchTerm);
           
          }}
        />
        <button className="btn-search" type="submit">
          {" "}
          <FaSearch className="search-icon" />
        </button>
      </form>
      <ul className="menu-nav">
        <li>
          <NavLink to="/">English Movie</NavLink>
        </li>
        <li>
          <NavLink to="/amaharic">Amaharic Movie</NavLink>
        </li>
        <div className="user-image">
          <FaUserCircle />
        </div>
      </ul>
    </header>
  );
};

export default Header;

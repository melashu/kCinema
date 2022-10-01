import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../common/colors.css";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">kCinema</Link>
      </div>
      <ul className="menu-nav">
        <li>
          <NavLink to="/">English Movie</NavLink>
        </li>
        <li>
          <NavLink to="/amaharic">Amaharic Movie</NavLink>
        </li>
        <div className="user-image"></div>
      </ul>
    </header>
  );
};

export default Header;

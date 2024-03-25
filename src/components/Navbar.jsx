import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="gym logo" />;
      </Link>

      <nav className="sections-routes">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/trainers" className="nav-link">
          Trainers
        </Link>
        <Link to="/classes" className="nav-link">
          Classes
        </Link>
        <Link to="/prices" className="nav-link">
          Prices
        </Link>
        <Link to="/contact" className="nav-link">
          Quote
        </Link>
      </nav>
      <div className="nav-btn">
        <Link to="/form" className="nav-btn">
          Member
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list menu"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </div>
  );
}

export default Navbar;

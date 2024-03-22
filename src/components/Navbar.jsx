import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="gym logo" />;
      </div>
      <div className="sections-routes">
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
      </div>
      <div className="nav-btn">
        <Link to="/form" className="nav-btn">
          Member
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

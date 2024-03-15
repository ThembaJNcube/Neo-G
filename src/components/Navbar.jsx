import React from "react";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
<img src={logo} alt="gym logo" />;

        
      </div>
      <div className="sections-routes">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Gallery
        </a>
        <a href="#" className="nav-link">
          Trainers
        </a>
        <a href="#" className="nav-link">
          Classes
        </a>
        <a href="#" className="nav-link">
          Prices
        </a>
        <a href="#" className="nav-link">
          Quote
        </a>
      </div>
      <div className="forms-route">
        <button className="nav-btn">Member</button>
      </div>
    </div>
  );
}

export default Navbar;

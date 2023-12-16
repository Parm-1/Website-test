import React from "react";
import "../styles.css"; // Make sure to import the styles.css file
import logo from "../images/logo2.png"; // Replace with the path to your actual logo image
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/research" className="nav-item">
          Research
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

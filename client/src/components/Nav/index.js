import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Google Books</div>
      <ul>
        <li>
          <Link to="/">
            Search
          </Link>
        </li>
        <li>
          <Link to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
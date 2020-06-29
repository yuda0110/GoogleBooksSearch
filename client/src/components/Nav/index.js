import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span>Google Books</span>
      <Link className="navbar-brand" to="/">
        Search
      </Link>
      <Link className="navbar-brand" to="/saved">
        Saved
      </Link>
    </nav>
  );
}

export default Nav;
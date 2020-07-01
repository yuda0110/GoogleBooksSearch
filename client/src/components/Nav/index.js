import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Google Books</div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/saved" activeClassName="active">
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);

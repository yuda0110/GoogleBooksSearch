import React from "react";
import "./style.css";
import Icon from "../../assets/images/react-logo.svg"

const Header = () => {
  return(
    <header>
      <h1>
        <img src={Icon} alt="React" className="react-icon"/>
        Google Books Search
      </h1>
      <h2>Search for and Save Books of Internet</h2>
    </header>
  );
}

export default Header;
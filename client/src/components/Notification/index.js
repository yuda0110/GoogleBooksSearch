import React from "react";
import "./style.css";

const Notification = ({response}) => {
  return(
    response ?
      <p className="notification">
        <span className="title">{`${response.title} `}</span>
        has been saved!
      </p>
      : ""
  );
}

export default Notification;
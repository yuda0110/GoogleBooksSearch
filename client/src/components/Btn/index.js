import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const DeleteBtn = (props) => {
  return (
    <span className="btn btn-red" onClick={props.deleteHandler}>
      Delete
    </span>
  );
}

export const SaveBtn = (props) => {
  return (
    <>
      {props.savedBookIds.includes(props.bookId) ? (
          <button className="btn btn-saved">Saved</button>
        ) : (
          <button className="btn btn-green" onClick={props.saveHandler}>Save</button>
        )}
    </>
  );
}

export const ViewBtn = ({ link }) => {
  return (
    <a href={link} className="btn btn-blue" target="_blank" rel="noopener">View</a>
  )
}



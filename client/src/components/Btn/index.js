import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const DeleteBtn = (props) => {
  return (
    <span className="delete-btn" onClick={props.deleteHandler} role="button" tabIndex="0">
      ✗ Delete
    </span>
  );
}

export const SaveBtn = (props) => {
  return (
    <>
      {props.savedBookIds.includes(props.bookId) ? (
          <button>Saved</button>
        ) : (
          <button onClick={props.saveHandler}>Save</button>
        )}
    </>
  );
}

export const ViewBtn = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener">View</a>
  )
}



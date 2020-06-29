import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const DeleteBtn = (props) => {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
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



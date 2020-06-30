import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export const Input = props => {
  return (
    <input className="form-input" {...props} />
  );
}


export const FormBtn = props => {
  return (
    <button {...props} className="btn-form">
      {props.children}
    </button>
  );
}

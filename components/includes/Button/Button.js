import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onButtonClick}
      className="main-grid-container-button"
    >
      {props.children}
    </button>
  );
}

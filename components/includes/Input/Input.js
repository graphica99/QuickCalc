import React from "react";

export default function Input(props) {
  return (
    <div className="main__grid-container-input-container u-mb-small">
      <input
        type="text"
        className="main__grid-container-input"
        autoFocus
        value={props.inputValue}
        onChange={props.onInputChangeHandler.bind(this)}
      />
    </div>
  );
}

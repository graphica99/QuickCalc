import React, { useState } from "react";
import Input from "../components/includes/Input/Input";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const onInputChangeHandler = (e) => {
    setDisabled(false);
    setInputValue(e.target.value);
  };

  const buttonClickHandler = (value) => {
    console.log(Number(inputValue));
    // if (Number(inputValue)) {
    //   console.log("you entered an alphabet");
    // }
    //regex for number
    //if alphabet typed more than three times then show and alert
    setDisabled(false);
    setInputValue((prev) => prev + value);
  };

  const resetHandler = () => {
    setInputValue("");
  };

  const onCalculateHandler = () => {
    let res = eval(inputValue);
    setInputValue(String(res));
  };

  const delClickHandler = () => {
    setInputValue((prev) => prev.substring(0, inputValue.length - 1));
  };

  return (
    <main className="main__section">
      <Input
        inputValue={inputValue}
        onInputChangeHandler={(e) => onInputChangeHandler}
      />
      <div className="main__grid-container">
        <div className="main__grid-container--buttons">
          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("7")}
          >
            7
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("8")}
          >
            8
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("9")}
          >
            9
          </button>

          <button
            className="main-grid-container-button del"
            onClick={() => delClickHandler()}
          >
            DEL
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("4")}
          >
            4
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("5")}
          >
            5
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("6")}
          >
            6
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("+")}
          >
            +
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("1")}
          >
            1
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("2")}
          >
            2
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("3")}
          >
            3
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("-")}
          >
            -
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler(".")}
          >
            .
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("0")}
          >
            0
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("/")}
          >
            /
          </button>

          <button
            className="main-grid-container-button"
            onClick={() => buttonClickHandler("*")}
          >
            X
          </button>

          <button
            className="main-grid-container-button reset"
            onClick={() => resetHandler()}
          >
            RESET
          </button>

          <button
            className="main-grid-container-button equal"
            disabled={disabled}
            onClick={() => onCalculateHandler()}
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
};

export default Index;

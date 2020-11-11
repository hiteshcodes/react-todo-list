import React from "react";
import darkModeButton from "./icons/night.svg";
import lightModeButton from "./icons/sun.svg";

const Form = ({
  handleInput,
  handleSubmit,
  input,
  isDarkMode,
  handleLightModeButton,
  handleDarkModeButton,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="header">
        <h1 className="">Todo List</h1>
        <button className="darkModeButton">
          {isDarkMode ? (
            <img
              src={lightModeButton}
              alt=""
              width="30px"
              onClick={handleLightModeButton}
            />
          ) : (
            <img
              src={darkModeButton}
              alt=""
              width="30px"
              onClick={handleDarkModeButton}
            />
          )}
        </button>
      </div>

      <div className="container form-main">
        <input type="text" onChange={(e) => handleInput(e)} value={input} />
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

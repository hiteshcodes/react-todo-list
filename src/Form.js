import React, { useState, useEffect } from "react";
import darkModeButton from "./icons/night.svg";
import lightModeButton from "./icons/sun.svg";
import moment from "moment";

const Form = ({
  handleInput,
  handleSubmit,
  input,
  isDarkMode,
  handleLightModeButton,
  handleDarkModeButton,
}) => {
  const [currDate, setCurrDate] = useState("");
  useEffect(() => {
     setInterval(() => {
      setCurrDate(moment().format("ddd, Do MMMM YYYY, h:mm a"));
    }, 1000);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="header">
        <div className="">
          <h3>Todo list</h3>
          <span>{currDate}</span>
        </div>
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

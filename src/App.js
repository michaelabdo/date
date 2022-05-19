import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
//import DatePicker from 'react-date-picker/dist/entry.nostyle'
import calculateDates from "./Components/CalculateDates";
import Button from "./Components/Button";

function App() {
  const [valueOne, onChangeOne] = useState(new Date());
  const [valueTwo, onChangeTwo] = useState(new Date());

  const style = {
    padding: "20px",
  };

  const divStyle = {
    overflowY: "scroll",
    border: "1px solid white",
    width: "200px",
    float: "left",
    height: "200px",
    flexDirection: "column-reverse",
    display: "flex",
    paddingBottom: "20px",
    textAlign: "center",
  };

  return (
    <div className="container">
      <h1 className="header-bar">Date Range Finder</h1>

      <div style={style}>
        <DatePicker onChange={onChangeOne} value={valueOne} />
      </div>

      <div style={style}>
        <DatePicker onChange={onChangeTwo} value={valueTwo} />
      </div>

      <div style={divStyle} id="outputDiv"></div>

      <div style={style}>
        <button
          className="button"
          onClick={() =>
            (document.getElementById("outputDiv").innerHTML +=
              calculateDates(valueOne, valueTwo, false) + "<br/>")
          }
        >
          {" "}
          Calculate Dates
        </button>
      </div>
    </div>
  );
}

export default App;

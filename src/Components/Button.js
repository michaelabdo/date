import React, { Component } from 'react';
import style from '../App.css'; // Import regular stylesheet
import calculateDates from './CalculateDates';

class Button extends Component {
  render(valueOne, valueTwo) {
    // reference as a js object
    return <button
    className={style.button}
    onClick={() =>
      (document.getElementById("outputDiv").innerHTML +=
        calculateDates(valueOne, valueTwo, false) + "<br/>")
    }
  >
    Calculate
  </button>;
  }
}

export default Button;
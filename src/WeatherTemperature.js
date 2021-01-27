import React, { useState } from "react";
import "./WeatherTemperature.css";

import Celsius from "./images/Celsius.svg";
import Fahrenheit from "./images/Fahrenheit.svg";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function celsius() {
    return (props.fahrenheit - 32) * (5 / 9);
  }

  if (unit === `imperial`) {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.fahrenheit)}</span>
        <span className="Units">
          °F |
          <a href="/" onClick={showMetric}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(celsius())} </span>
        <span className="Units">
          <a href="/" onClick={showImperial}>
            °F |
          </a>
          °C
        </span>
      </div>
    );
  }
}

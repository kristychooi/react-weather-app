import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.details.city}, {props.details.country}
      </h2>
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(props.details.temperature)}{" "}
        </span>
        <span className="Unit">°F </span>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-icon">
            <WeatherIcon code={props.details.icon} />
          </div>
          <div className="text-capitalize">{props.details.description}</div>
        </div>

        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.details.feels_like)}°</li>
            <li>Humidity: {props.details.humidity}%</li>
            <li>Wind: {props.details.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

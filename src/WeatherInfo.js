import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    // <h1 className="date">
    //   Placeholder
    // </h1>
    <div>
      <h2>
        {props.details.city}, {props.details.country}
      </h2>
      <ul>
        <li>Temperature: {Math.round(props.details.temperature)}°F </li>
        <li>Humidity: {props.details.humidity}%</li>
        <li>Wind: {props.details.wind} km/h</li>
        <li>
          <div className="weather-icon">
            <WeatherIcon code={props.details.icon} />
          </div>
        </li>
        <li className="text-capitalize">{props.details.description}</li>
      </ul>
    </div>
  );
}

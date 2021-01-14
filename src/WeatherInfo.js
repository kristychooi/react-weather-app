import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        {props.details.city}, {props.details.country}
      </h2>
      <div className="WeatherTemperature">
        <WeatherTemperature fahrenheit={props.details.temperature} />
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

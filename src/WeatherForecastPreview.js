import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecastPreview.css";
import Moment from "react-moment";

export default function WeatherForecastPreview(props) {
  function temperature() {
    let temperature = Math.round(props.temp);
    let temperatureCelsius = Math.round((temperature - 32) * (5 / 9));

    if (props.unit === "imperial") {
      return `${temperature}°`;
    } else {
      return `${temperatureCelsius}°`;
    }
  }

  return (
    <div>
      <div className="Days row">
        <div className="Details col-8">
          <strong>
            <Moment format="dddd">{props.unformattedDay * 1000}</Moment>
          </strong>
          <br />
          {temperature()}
        </div>
        <div className="ForecastIcons col-4">
          <WeatherIcon code={props.icon} />
        </div>
      </div>
    </div>
  );
}

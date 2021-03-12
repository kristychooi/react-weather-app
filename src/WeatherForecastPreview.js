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
    <div className="Forecast">
      <div className="Details">
        <div className="Day Desktop">
          <strong>
            <Moment format="dddd">{props.unformattedDay * 1000}</Moment>
          </strong>
        </div>
        <div className="Day Mobile">
          <strong>
            <Moment format="ddd">{props.unformattedDay * 1000}</Moment>
          </strong>
        </div>
        <div className="temperature">{temperature()}</div>
      </div>
      <div className="ForecastIcons">
        <WeatherIcon code={props.icon} />
      </div>
    </div>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecastPreview.css";
import Moment from "react-moment";

export default function WeatherForecastPreview(props) {
  function temperature() {
    let temperature = Math.round(props.temp);
    return `${temperature}°F`;
  }

  function description() {
    let description = props.description;
    return `${description}`;
  }

  return (
    <div>
      <div className="Days row">
        <div className="Details col-8">
          <strong>
            <Moment format="ddd">{props.unformattedDay * 1000}</Moment>
          </strong>
          <br />
          {temperature()}
          {/* <br />
          <div className="text-capitalize">{description()}</div> */}
        </div>
        <div className="ForecastIcons col-4">
          <WeatherIcon code={props.icon} />
        </div>
      </div>
    </div>
  );
}

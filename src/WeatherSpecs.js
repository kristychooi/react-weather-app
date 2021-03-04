import React from "react";
import "./WeatherSpecs.css";

export default function WeatherInfo(props) {
  function specs() {
    let feelsLikeTemperatureImperial = Math.round(props.details.feels_like);
    let feelsLikeTemperatureMetric = Math.round(
      (feelsLikeTemperatureImperial - 32) * (5 / 9)
    );

    let windSpeedImperial = props.details.wind.toFixed(2);
    let windSpeedMetric = (windSpeedImperial / 2.237).toFixed(2);

    let humidityPercentage = props.details.humidity;

    if (props.unit === "imperial") {
      return (
        <div>
          <ul className="specs">
            <li>Feels like: {feelsLikeTemperatureImperial}°</li>
            <li>Humidity: {humidityPercentage}%</li>
            <li>Wind: {windSpeedImperial} mph</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="specs">
            <li>Feels like: {feelsLikeTemperatureMetric}°</li>
            <li>Humidity: {humidityPercentage}%</li>
            <li>Wind: {windSpeedMetric} mps</li>
          </ul>
        </div>
      );
    }
  }

  return <div className="WeatherSpecs">{specs()}</div>;
}

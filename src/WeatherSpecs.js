import React from "react";
import Moment from "react-moment";
import "./WeatherSpecs.css";

export default function WeatherInfo(props) {
  function specs() {
    let feelsLikeTemperature = Math.round(props.details.feels_like);
    let feelsLikeTemperatureCelsius = Math.round(
      (feelsLikeTemperature - 32) * (5 / 9)
    );

    let tempMax = Math.round(props.details.temp_max);
    let tempMaxCelcius = Math.round((tempMax - 32) * (5 / 9));

    let tempMin = Math.round(props.details.temp_min);
    let tempMinCelcius = Math.round((tempMin - 32) * (5 / 9));

    let humidityPercentage = props.details.humidity;

    // let windSpeedKM = windSpeed * 1.609;
    // windSpeedDisplay.innerHTML = `WIND: ${Math.round(windSpeedKM)} km/h`;

    if (props.unit === "imperial") {
      return (
        <div>
          <ul className="specs">
            <li>Feels like: {feelsLikeTemperature}°</li>
            <li>Temp max: {tempMax}°</li>
            <li>Temp min: {tempMin}°</li>
            <li>Humidity: {humidityPercentage}%</li>
            <li>Wind: {props.details.wind} km/h</li>
          </ul>
          ;
        </div>
      );
    } else {
      return (
        <div>
          <ul className="specs">
            <li>Feels like: {feelsLikeTemperatureCelsius}°</li>
            <li>Temp max: {tempMaxCelcius}°</li>
            <li>Temp min: {tempMinCelcius}°</li>
            <li>Humidity: {humidityPercentage}%</li>
          </ul>
          ;
        </div>
      );
    }
  }

  return <div className="WeatherSpecs">{specs()}</div>;
}

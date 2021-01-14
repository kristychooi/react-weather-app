import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Location() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(`${apiUrl}`).then(displayWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form id="city-input-form" onSubmit={handleSubmit}>
      <div className="change-location">
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              placeholder="Change location"
              autoFocus="on"
              className="change-location-input"
              id="city-input"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-5 button-section">
            <button className="buttons" id="search-button">
              <i className="fas fa-search-location"></i>
              Search
            </button>
            <button className="buttons" id="my-location-button">
              <i className="fas fa-location-arrow"></i>
              My Location
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
        {form}
        <WeatherInfo data="weatherData" />
        <ul>
          <li>Temperature: {Math.round(weatherData.temperature)}°F </li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
          <li>
            <img src={weatherData.icon} alt={weatherData.description} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
    );
  } else {
    return <div className="location">{form}</div>;
  }
}

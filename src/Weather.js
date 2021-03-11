import React, { useState, useEffect } from "react";
import axios from "axios";
import City from "./City.js";
import Cities from "./Cities.js";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast.js";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherDescription from "./WeatherDescription.js";
import WeatherSpecs from "./WeatherSpecs.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [localTime, setLocalTime] = useState({ ready: false });
  const [unit, setUnit] = useState("imperial");

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function updateLocalTime(response) {
    setLocalTime({
      ready: true,
      date: response.data.location.localtime,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = event.target[0].value;
    setCity(city);
  }

  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="form-row d-flex justify-content-center">
        <input
          className="form-control"
          type="search"
          placeholder="Type a city name"
          autoFocus="on"
        />
        <button type="submit" className="btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );

  function search() {
    let apiUrl;

    //calls current weather API
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(`${apiUrl}`).then(displayWeather);

    //calls current time API
    apiUrl = `https://api.weatherapi.com/v1/timezone.json?key=acc92b71f8734f78b34181730202112&q=${city}`;
    axios.get(`${apiUrl}`).then(updateLocalTime);
  }

  if (weatherData.ready && localTime.ready) {
    return (
      <div className="WeatherDisplay">
        <div className="city-column">
          <Cities setCity={setCity} />
        </div>
        <div className="Form">{form}</div>
        <div className="City">
          <City city={weatherData.city} country={weatherData.country} />
        </div>
        <div className="Date">
          <FormattedDate className="Date" date={localTime.date} />
        </div>
        <div className="main-body">
          <div className="WeatherTemperature-and-Units">
            <WeatherTemperature
              fahrenheit={weatherData.temperature}
              unit={unit}
              setUnit={setUnit}
            />
          </div>
          <div className="row body">
            <div className="col-6 icon-description-column">
              <div className="weather-icon">
                <WeatherIcon code={weatherData.icon} />
              </div>
              <div className="description text-capitalize">
                <WeatherDescription description={weatherData.description} />
              </div>
            </div>
            <div className="col-6 specs-column">
              <WeatherSpecs details={weatherData} unit={unit} />
            </div>
          </div>
        </div>
        <div className="weather-forecast">
          <WeatherForecast
            lat={weatherData.lat}
            lon={weatherData.lon}
            unit={unit}
          />
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}

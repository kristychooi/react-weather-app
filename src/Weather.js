import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast.js";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
  
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
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(`${apiUrl}`).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
        {form}
        <FormattedDate date={weatherData.date} />
        <WeatherInfo details={weatherData} />
        <WeatherForecast />
        {/* // city={weatherData.city}
          // country={weatherData.country}
          // timezone={weatherData.timezone}  */}
      </div>
    );
  } else {
    return <div className="WeatherDisplay">{form}</div>;
  }
}

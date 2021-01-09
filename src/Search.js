import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
        {form}
        <WeatherInfo details={weatherData} />
        {/* <WeatherForecast
          city={weatherData.city}
          country={weatherData.country}
          timezone={weatherData.timezone}
        /> */}
      </div>
    );
  } else {
    return form;
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast.js";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [localTime, setLocalTime] = useState({ ready: false });

  useEffect(() => {
    search();
  }, []);

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
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  function search() {
    let apiUrl;

    //calls current weather API
    console.log("Calling Weather API");
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(`${apiUrl}`).then(displayWeather);

    //calls current time API
    console.log("Calling Time API");
    apiUrl = `https://api.weatherapi.com/v1/timezone.json?key=acc92b71f8734f78b34181730202112&q=${city}`;
    axios.get(`${apiUrl}`).then(updateLocalTime);
  }

  if (weatherData.ready && localTime.ready) {
    return (
      <div className="WeatherDisplay">
        {form}
        <FormattedDate className="Date" date={localTime.date} />
        <div className="row">
          <div className="col-8">
            <WeatherInfo details={weatherData} />
          </div>
          <div className="col-4">
            <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}

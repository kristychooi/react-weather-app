import React, { useState } from "react";

import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview.js";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        {/* Loopingin React */}
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <WeatherForecastPreview data={forecastItem} />;
        })}
        {/* Or simpler option without looping
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} /> */}
      </div>
    );
  } else {
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(forecastApiUrl).then(displayForecast);

    return null;
  }
}

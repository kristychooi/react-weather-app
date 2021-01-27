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

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {/* Loopingin React
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <WeatherForecastPreview data={forecastItem} />;
        })} */}
        {/* Or simpler option without looping */}
        <ul>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[1].temp.max}
              icon={forecast.daily[1].weather[0].icon}
              description={forecast.daily[1].weather[0].description}
              unformattedDay={forecast.daily[1].dt}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[2].temp.max}
              icon={forecast.daily[2].weather[0].icon}
              description={forecast.daily[2].weather[0].description}
              unformattedDay={forecast.daily[2].dt}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[3].temp.max}
              icon={forecast.daily[3].weather[0].icon}
              description={forecast.daily[3].weather[0].description}
              unformattedDay={forecast.daily[3].dt}
            />
          </li>
          <WeatherForecastPreview
            temp={forecast.daily[4].temp.max}
            icon={forecast.daily[4].weather[0].icon}
            description={forecast.daily[4].weather[0].description}
            unformattedDay={forecast.daily[4].dt}
          />
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[5].temp.max}
              icon={forecast.daily[5].weather[0].icon}
              description={forecast.daily[5].weather[0].description}
              unformattedDay={forecast.daily[5].dt}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(forecastApiUrl).then(displayForecast);

    return null;
  }
}

import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview.js";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.lat, props.lon]);

  function getForecast() {
    setLoaded(false);
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=080f1afef2a9a2ea9659284510c483ad&units=imperial`;
    axios.get(forecastApiUrl).then(displayForecast);
  }

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (!loaded) {
    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div>
          <h5 className="Heading">
            <strong>5-Day Forecast</strong>
          </h5>
        </div>
        <ul>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[1].temp.max}
              icon={forecast.daily[1].weather[0].icon}
              description={forecast.daily[1].weather[0].description}
              unformattedDay={forecast.daily[1].dt}
              unit={props.unit}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[2].temp.max}
              icon={forecast.daily[2].weather[0].icon}
              description={forecast.daily[2].weather[0].description}
              unformattedDay={forecast.daily[2].dt}
              unit={props.unit}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[3].temp.max}
              icon={forecast.daily[3].weather[0].icon}
              description={forecast.daily[3].weather[0].description}
              unformattedDay={forecast.daily[3].dt}
              unit={props.unit}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[4].temp.max}
              icon={forecast.daily[4].weather[0].icon}
              description={forecast.daily[4].weather[0].description}
              unformattedDay={forecast.daily[4].dt}
              unit={props.unit}
            />
          </li>
          <li>
            <WeatherForecastPreview
              temp={forecast.daily[5].temp.max}
              icon={forecast.daily[5].weather[0].icon}
              description={forecast.daily[5].weather[0].description}
              unformattedDay={forecast.daily[5].dt}
              unit={props.unit}
            />
          </li>
        </ul>
      </div>
    );
  }
}

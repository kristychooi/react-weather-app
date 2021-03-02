// import React, { useState } from "react";
// import SearchWeather from "./SearchWeather.js";
// import axios from "axios";
import Paris from "./images/Paris.svg";
import London from "./images/London.svg";
import NewYork from "./images/NewYork.svg";
import SanFrancisco from "./images/SanFrancisco.svg";
import Pisa from "./images/Pisa.svg";
import "./Cities.css";

export default function Cities(props) {
  // const [city, setCity] = useState("");

  function updateCityLondon(event) {
    event.preventDefault();
    let city = "London";
    props.setCity(city);
    console.log(city);
  }

  function updateCityNewYork(event) {
    event.preventDefault();
    let city = "New York";
    props.setCity(city);
    console.log(city);
  }

  function updateCityParis(event) {
    event.preventDefault();
    let city = "Paris";
    props.setCity(city);
    console.log(city);
  }

  function updateCityPisa(event) {
    event.preventDefault();
    let city = "Pisa";
    props.setCity(city);
    console.log(city);
  }

  function updateCitySanFrancisco(event) {
    event.preventDefault();
    let city = "San Francisco";
    props.setCity(city);
    console.log(city);
  }

  return (
    <div className="Cities">
      <div className="IconList">
        <ul>
          <li>
            <a href="/" onClick={updateCityLondon}>
              <img className="CityIcons" src={London} />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityNewYork}>
              <img className="CityIcons" src={NewYork} />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityParis}>
              <img className="CityIcons" src={Paris} />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityPisa}>
              <img className="CityIcons" src={Pisa} />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCitySanFrancisco}>
              <img className="CityIcons" src={SanFrancisco} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

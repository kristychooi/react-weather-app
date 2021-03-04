import React from "react";
import "./WeatherIcon.css";

import ClearDay from "./images/ClearDay.svg";
import StarNight from "./images/StarNight.svg";
import FewCloudsDay from "./images/FewCloudsDay.svg";
import CloudsNight from "./images/CloudsNight.svg";
import BrokenCloudsDay from "./images/BrokenCloudsDay.svg";
import ShowerRain from "./images/ShowerRain.svg";
import RainDay from "./images/RainDay.svg";
import RainNight from "./images/RainNight.svg";
import Snow from "./images/Snow.svg";
import Thunderstorm from "./images/Thunderstorm.svg";
import Mist from "./images/Mist.svg";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": ClearDay,
    "01n": StarNight,
    "02d": FewCloudsDay,
    "02n": CloudsNight,
    "03d": FewCloudsDay,
    "03n": CloudsNight,
    "04d": BrokenCloudsDay,
    "04n": CloudsNight,
    "09d": ShowerRain,
    "09n": ShowerRain,
    "10d": RainDay,
    "10n": RainNight,
    "11d": Thunderstorm,
    "11n": Thunderstorm,
    "13d": Snow,
    "13n": Snow,
    "50d": Mist,
    "50n": Mist,
  };

  return <img className="Icon" src={codeMapping[code]} alt={alt} />;
}

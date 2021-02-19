import React from "react";
import "./City.css";

export default function WeatherInfo(props) {
  return (
    <div className="City">
        {props.city}, {props.country}
      </div>
  );
}

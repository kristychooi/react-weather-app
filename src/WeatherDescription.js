import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription (props) {
  return (   
  <div className="description text-capitalize">
            {props.description}
          </div>
  )
}
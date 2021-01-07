import React from "react";
import "./App.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        <a
          href="https://github.com/kristychooi/react-weather-app"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Kristy Chooi
      </footer>
    </div>
  );
}

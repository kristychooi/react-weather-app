import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hobart, AU" />
      </div>
      <Footer />
    </div>
  );
}

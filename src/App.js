import React from "react";
import "./App.css";
import Search from "./Search.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Sydney,AU" />
        <Footer />
      </div>
    </div>
  );
}

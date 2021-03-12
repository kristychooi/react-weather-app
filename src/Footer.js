import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <a
          href="https://github.com/kristychooi/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kristy Chooi
      </div>
      <div className="attribution">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/dinosoftlabs"
          title="DinosoftLabs"
        >
          DinosoftLabs{" "}
        </a>
        and{" "}
        <a
          href="https://www.flaticon.com/authors/nikita-golubev"
          title="Nikita Golubev"
        >
          Nikita Golubev
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

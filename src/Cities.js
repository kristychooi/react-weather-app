import Paris from "./images/Paris.svg";
import London from "./images/London.svg";
import NewYork from "./images/NewYork.svg";
import SanFrancisco from "./images/SanFrancisco.svg";
import Pisa from "./images/Pisa.svg";
import "./Cities.css";

export default function Cities(props) {
  function updateCityLondon(event) {
    event.preventDefault();
    let city = "London";
    props.setCity(city);
  }

  function updateCityNewYork(event) {
    event.preventDefault();
    let city = "New York";
    props.setCity(city);
  }

  function updateCityParis(event) {
    event.preventDefault();
    let city = "Paris";
    props.setCity(city);
  }

  function updateCityPisa(event) {
    event.preventDefault();
    let city = "Pisa";
    props.setCity(city);
  }

  function updateCitySanFrancisco(event) {
    event.preventDefault();
    let city = "San Francisco";
    props.setCity(city);
  }

  return (
    <div className="Cities">
      <div className="IconList">
        <ul>
          <li>
            <a href="/" onClick={updateCityLondon}>
              <img className="CityIcons" src={London} alt="LondonIcon" />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityNewYork}>
              <img className="CityIcons" src={NewYork} alt="NewYorkIcon" />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityParis}>
              <img className="CityIcons" src={Paris} alt="ParisIcon" />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCityPisa}>
              <img className="CityIcons" src={Pisa} alt="PisaIcon" />
            </a>
          </li>
          <li>
            <a href="/" onClick={updateCitySanFrancisco}>
              <img
                className="CityIcons"
                src={SanFrancisco}
                alt="sanFranciscoIcon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

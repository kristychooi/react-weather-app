import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function showMetric(event) {
    event.preventDefault();
    props.setUnit("metric");
  }

  function showImperial(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }

  function celsius() {
    return (props.fahrenheit - 32) * (5 / 9);
  }

  if (props.unit === `imperial`) {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.fahrenheit)}</span>
        <span className="Units">
          °F |{" "}
          <a href="/" onClick={showMetric}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(celsius())} </span>
        <span className="Units">
          <a href="/" onClick={showImperial}>
            °F |{" "}
          </a>
          °C
        </span>
      </div>
    );
  }
}

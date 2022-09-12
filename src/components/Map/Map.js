import TurkeyMap from "turkey-map-react";
import { useNavigate } from "react-router-dom";
import withStates from "../../hocs/withStates";
import React from "react";
import { useEffect } from "react";

const Map = ({ getCurrentWeather, weather, setTheme }) => {
  let navigation = useNavigate();

  const goBack = () => {
    navigation("/");
  };

  useEffect(() => {
    setTheme();
  });

  return (
    <div className="map-container">
      <div className="go-back">
        <button onClick={goBack}>Go back</button>
      </div>

      <TurkeyMap
        hoverable={true}
        onHover={({ name }) => console.log(name)}
        onClick={({ name }) => getCurrentWeather(name)}
      />

      <div className="card">
        <div className="current-weather-container">
          <div className="top">
            <label className="city-name">{weather.name}</label>
            <label className="weather-description">
              {weather.weather[0].description}
            </label>
            <div className="city-icon">
              <img src={`icons/${weather.weather[0].icon}.png`} alt="icon" />
            </div>
          </div>
          <div className="bottom">
            <div className="temperature">
              {Math.round(weather.main.temp)} °C
            </div>
            <div className="feels-like">
              <span>feels like </span>
              {Math.round(weather.main.feels_like)} °C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStates(Map);

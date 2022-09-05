import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import React, { useContext } from "react";

const RightCard = () => {
  let navigate = useNavigate();
  const { weather } = useContext(WeatherContext);

  const showDetails = () => {
    navigate("/details");
  };

  return (
    <div className="right-card-container">
      <p>
        <span>Searched city</span> <AiOutlineArrowRight />
      </p>
      <div className="card" onClick={showDetails}>
        <div className="current-weather-container">
          <div className="top">
            <div className="left">
              <div className="city-name">{weather.name}</div>
              <div className="weather-description">
                {weather.weather[0].description}
              </div>
            </div>
            <div className="right">
              <div className="city-icon">
                <img src={`icons/${weather.weather[0].icon}.png`} alt="icon" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="temperature">
              {Math.floor(weather.main.temp)} °C
            </div>
            <div className="details">
              <div className="feels-like">
                <span>feels like </span>
                {Math.floor(weather.main.feels_like)} °C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;

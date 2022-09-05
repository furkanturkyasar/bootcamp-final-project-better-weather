import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const CurrentWeatherCard = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div>
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
          <div className="temperature">{Math.floor(weather.main.temp)} °C</div>
          <div className="details">
            <div className="feels-like">
              <span>Feels Like </span>
              {Math.floor(weather.main.feels_like)} °C
            </div>
            <div className="wind-speed">
              <span>Wind speed </span>
              {weather.wind.speed} m/s
            </div>
            <div className="wind-deg">
              <span>Wind degree </span>
              {weather.wind.deg} deg
            </div>
            <div className="humidity">
              <span>Humidity </span>
              {weather.main.humidity} %
            </div>
            <div className="pressure">
              <span>Pressure </span>
              {weather.main.pressure} mBar
            </div>
            <div className="temp-max">
              <span>Temp max </span>
              {weather.main.temp_max} °C
            </div>
            <div className="temp_min">
              <span>Temp min </span>
              {weather.main.temp_min} °C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;

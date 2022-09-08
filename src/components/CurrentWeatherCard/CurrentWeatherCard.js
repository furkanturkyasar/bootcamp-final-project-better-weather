import withStates from "../../hocs/withStates";

const CurrentWeatherCard = ({ weather, days }) => {
  let d = new Date(weather.dt);
  let today = days[d.getDay()];

  return (
    <div className="current-weather">
      <div className="top">
        <div className="left">
          <div className="today">{today}</div>
          <div className="feels-like">
            <span>Feels Like </span>
            {Math.round(weather.main.feels_like)} °C
          </div>
        </div>
        <div className="mid">
          <div className="city-name">{weather.name}</div>
          <div className="temperature">{Math.round(weather.main.temp)} °C</div>
        </div>
        <div className="right">
          <div className="city-icon">
            <img src={`icons/${weather.weather[0].icon}.png`} alt="icon" />
          </div>
          <div className="weather-description">
            {weather.weather[0].description}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="wind-speed detail">
            <span>Wind speed </span>
            {weather.wind.speed}m/s
          </div>
          <div className="wind-deg detail">
            <span>Wind degree </span>
            {weather.wind.deg}deg
          </div>
          <div className="humidity detail">
            <span>Humidity</span>
            {weather.main.humidity}%
          </div>
          <div className="pressure detail">
            <span>Pressure </span>
            {weather.main.pressure}mBar
          </div>
          <div className="temp-max detail">
            <span>Temp max </span>
            {weather.main.temp_max}°C
          </div>
          <div className="temp_min detail">
            <span>Temp min </span>
            {weather.main.temp_min}°C
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStates(CurrentWeatherCard);

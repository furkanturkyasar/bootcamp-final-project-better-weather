import withStates from "../../hocs/withStates";
import React from "react";

const DailyWeatherCard = ({ forecast, days }) => {
  const sevenDays = forecast.list.slice(0, 5);

  const currentDay = new Date().getDay();

  const forecastDays = days
    .slice(currentDay, days.length)
    .concat(days.slice(0, currentDay));

  return (
    <div className="daily-forecast-weather">
      {sevenDays.map((item, index) => (
        <div className="daily-item" key={index}>
          <label className="day">{forecastDays[index]}</label>
          <img
            id="daily-img"
            src={`icons/${item.weather[0].icon}.png`}
            alt="weather"
          />
          <label className="description">{item.weather[0].description}</label>
          <label className="temp">{Math.round(item.main.temp)} °C </label>
        </div>
      ))}
    </div>
  );
};

export default withStates(DailyWeatherCard);

import { WeatherContext } from "../../context/WeatherContext";
import React, { useContext } from "react";

const DailyWeatherCard = () => {
  const { forecast } = useContext(WeatherContext);

  console.log(forecast);

  return (
    <div>
      {forecast.city.name}
      {forecast.list[0].main.temp}
      {forecast.list[0].weather[0].description}
    </div>
  );
};

export default DailyWeatherCard;

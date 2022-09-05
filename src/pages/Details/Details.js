import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { WEATHER_API_URL, API_KEY } from "../../services/api";
import Navbar from "../../components/Navbar";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import DailyWeatherCard from "../../components/DailyWeatherCard";
import { WeatherContext } from "../../context/WeatherContext";
import React, { useEffect } from "react";

const Details = () => {
  let navigation = useNavigate();
  const { forecast, weather, setForecast } = useContext(WeatherContext);

  const goHome = () => {
    navigation("/");
  };

  const forecastFetch = () => {
    fetch(
      `${WEATHER_API_URL}/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        setForecast(response);
        localStorage.setItem("forecast", JSON.stringify(response));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    forecastFetch();
  }, []);

  return (
    <>
      <Navbar />
      <div className="details-container">
        <div className="homeIcon">
          <button onClick={goHome}>
            <span>Go back to home page</span>
            <BiArrowBack />
          </button>
        </div>
        <div className="current-weather">
          <CurrentWeatherCard />
        </div>
        <div className="daily-forecast-weather">
          {forecast && <DailyWeatherCard />}
        </div>
      </div>
    </>
  );
};

export default React.memo(Details);

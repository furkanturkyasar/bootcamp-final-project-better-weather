import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import DailyWeatherCard from "../../components/DailyWeatherCard";

const Details = () => {
  let navigation = useNavigate();

  const goHome = () => {
    navigation("/");
  };

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
          <h2>Current weather</h2>
          <CurrentWeatherCard />
        </div>
        <div className="daily-forecast-weather">
          <h2>8 days weather forecast</h2>
          <DailyWeatherCard />
        </div>
      </div>
    </>
  );
};

export default Details;

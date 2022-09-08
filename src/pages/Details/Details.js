import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { WEATHER_API_URL, API_KEY } from "../../services/api";
import Navbar from "../../components/Navbar";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import DailyWeatherCard from "../../components/DailyWeatherCard";
import withStates from "../../hocs/withStates";
import React, { useEffect } from "react";

const Details = ({ forecast, setForecast, weather }) => {
  let navigation = useNavigate();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="details-container">
        <div className="homeIcon">
          <button onClick={goHome}>
            <span>Go back</span>
            <BiArrowBack />
          </button>
        </div>
        <CurrentWeatherCard />
        {forecast && <DailyWeatherCard />}
      </div>
    </>
  );
};

export default React.memo(withStates(Details));

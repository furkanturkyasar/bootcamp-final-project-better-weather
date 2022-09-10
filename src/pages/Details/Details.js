import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import DailyWeatherCard from "../../components/DailyWeatherCard";
import withStates from "../../hocs/withStates";
import React, { useEffect } from "react";

const Details = ({ forecast, forecastFetch }) => {
  let navigation = useNavigate();

  const goHome = () => {
    navigation("/");
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

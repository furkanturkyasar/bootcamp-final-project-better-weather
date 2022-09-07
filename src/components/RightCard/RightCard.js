import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import withStates from "../../hocs/withStates";

const RightCard = ({ weather }) => {
  let navigate = useNavigate();

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
              {Math.floor(weather.main.temp)} °C
            </div>
            <div className="feels-like">
              <span>feels like </span>
              {Math.floor(weather.main.feels_like)} °C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStates(RightCard);

import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

const MinifiedCard = () => {
  const { cities } = useContext(WeatherContext);

  const slicedCities = cities.slice(Math.max(cities.length - 3, 0)).reverse();

  return (
    <div className="minified-card">
      {slicedCities.map((item, index) => (
        <div className="card-1 card" key={index}>
          <p>
            <span>Recent Search</span>
            <AiOutlineArrowRight />
          </p>
          <ul>
            <li>{item}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MinifiedCard;

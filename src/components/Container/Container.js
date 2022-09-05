import LeftCard from "../LeftCard";
import RightCard from "../RightCard";
import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";

const Container = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="main-container">
      <LeftCard />
      {weather && <RightCard />}
    </div>
  );
};

export default Container;

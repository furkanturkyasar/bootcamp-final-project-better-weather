import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const withStates = (WrappedComponent) => {
  return (props) => {
    const {
      weather,
      setWeather,
      days,
      forecast,
      setForecast,
      cities,
      setCities,
    } = useContext(WeatherContext);
    return (
      <WrappedComponent
        weather={weather}
        setWeather={setWeather}
        days={days}
        forecast={forecast}
        setForecast={setForecast}
        cities={cities}
        setCities={setCities}
        {...props}
      />
    );
  };
};

export default withStates;

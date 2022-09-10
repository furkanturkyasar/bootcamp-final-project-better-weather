import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";

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
      getCurrentWeather,
      forecastFetch,
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
        getCurrentWeather={getCurrentWeather}
        forecastFetch={forecastFetch}
        {...props}
      />
    );
  };
};

export default withStates;

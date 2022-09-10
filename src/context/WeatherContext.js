import { useState, createContext } from "react";
import { WEATHER_API_URL, API_KEY } from "../services/api";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  let defaultCities = [];

  let defaultWeather = null;

  let defaultForecast = null;

  if (localStorage.getItem("city")) {
    defaultCities = JSON.parse(localStorage.getItem("city"));
  }

  if (localStorage.getItem("weather")) {
    defaultWeather = JSON.parse(localStorage.getItem("weather"));
  }

  if (localStorage.getItem("forecast")) {
    defaultForecast = JSON.parse(localStorage.getItem("forecast"));
  }

  const [cities, setCities] = useState(defaultCities);

  const [weather, setWeather] = useState(defaultWeather);

  const [forecast, setForecast] = useState(defaultForecast);

  const getCurrentWeather = (trimmedSearch) => {
    fetch(
      `${WEATHER_API_URL}/weather?q=${trimmedSearch}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
        localStorage.setItem("weather", JSON.stringify(response));
        setCities([...cities, response.name]);
        localStorage.setItem(
          "city",
          JSON.stringify([...cities, response.name])
        );
      })
      .catch((err) => console.log(err));
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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const value = {
    weather,
    setWeather,
    days,
    forecast,
    setForecast,
    cities,
    setCities,
    getCurrentWeather,
    forecastFetch,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;

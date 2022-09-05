import { useState, createContext } from "react";

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

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const value = {
    weather,
    setWeather,
    days,
    forecast,
    setForecast,
    cities,
    setCities,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;

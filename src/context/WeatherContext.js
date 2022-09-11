import { useState, createContext } from "react";
import { WEATHER_API_URL, API_KEY } from "../services/api";
import summer from "../background/summer.png";
import fall from "../background/fall.png";
import winter from "../background/winter.png";

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

  const [background, setBackground] = useState(null);

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

  const setTheme = () => {
    if (!weather.main.temp) {
      return;
    }

    switch (true) {
      case weather.main.temp > 16:
        setBackground(summer);
        document.body.style.backgroundImage = `url(${background})`;
        break;
      case weather.main.temp < 1:
        setBackground(winter);
        document.body.style.backgroundImage = `url(${background})`;
        break;
      default:
        setBackground(fall);
        document.body.style.backgroundImage = `url(${background})`;
        break;
    }
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
    setTheme,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;

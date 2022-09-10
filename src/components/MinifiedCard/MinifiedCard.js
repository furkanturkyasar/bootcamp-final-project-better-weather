import withStates from "../../hocs/withStates";
import { WEATHER_API_URL, API_KEY } from "../../services/api";

const MinifiedCard = ({ cities, setWeather, setCities }) => {
  const slicedCities = cities.slice(Math.max(cities.length - 3, 0)).reverse();

  const fetchCityWeather = (item) => {
    fetch(`${WEATHER_API_URL}/weather?q=${item}&appid=${API_KEY}&units=metric`)
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

  return (
    <div className="minified-card">
      {slicedCities.map((item, index) => (
        <div className="card-1 card" key={index}>
          <ul>
            <li onClick={() => fetchCityWeather(item)}>{item}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default withStates(MinifiedCard);

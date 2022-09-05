import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import { WEATHER_API_URL, API_KEY } from "../../services/api.js";
import { WeatherContext } from "../../context/WeatherContext";
import MinifiedCard from "../MinifiedCard";
import { useState, useContext } from "react";

const LeftCard = () => {
  const [search, setSearch] = useState("");
  const { setWeather, setCities, cities } = useContext(WeatherContext);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (!trimmedSearch.length > 0) {
      return toast.info("Empty input value!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

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

    setSearch("");
  };

  return (
    <div className="left-card-container">
      <div className="top">
        <input
          type="text"
          placeholder="Search for the city"
          onChange={handleOnChange}
          value={search}
        />
        <button onClick={handleSearch}>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="bottom">
        {" "}
        <MinifiedCard />
      </div>
    </div>
  );
};

export default LeftCard;

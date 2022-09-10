import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import MinifiedCard from "../MinifiedCard";
import withStates from "../../hocs/withStates.js";
import React, { useState } from "react";

const LeftCard = ({ getCurrentWeather }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
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

    getCurrentWeather(trimmedSearch);
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

export default withStates(LeftCard);

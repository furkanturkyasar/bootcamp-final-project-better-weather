import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import MinifiedCard from "../MinifiedCard";
import React from "react";

const LeftCard = () => {
  return (
    <div className="left-card-container">
      <div className="top">
        <input type="text" />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="bottom">
        <p>
          <span>Recent Searches</span>
          <AiOutlineArrowRight />
        </p>
        <MinifiedCard />
      </div>
    </div>
  );
};

export default LeftCard;

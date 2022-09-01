import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const RightCard = () => {
  const showDetails = () => {
    console.log("showing details");
  };

  return (
    <div className="right-card-container">
      <p>
        <span>Searched city</span> <AiOutlineArrowRight />
      </p>
      <div className="card" onClick={showDetails}>
        Card
      </div>
    </div>
  );
};

export default RightCard;

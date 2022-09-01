import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React from "react";

const RightCard = () => {
  let navigate = useNavigate();

  const showDetails = () => {
    navigate("/details");
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

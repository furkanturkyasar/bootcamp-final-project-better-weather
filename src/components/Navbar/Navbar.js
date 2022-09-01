import React from "react";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div id="header">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        <h1>Better Weather</h1>
      </div>
      <div className="nav-right-section">
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;

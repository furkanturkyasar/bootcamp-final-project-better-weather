import React from "react";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser({
      isAuth: false,
    });
  };

  return (
    <div className="nav-container">
      <div id="header">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        <h1>Better Weather</h1>
      </div>
      <div className="nav-right-section">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;

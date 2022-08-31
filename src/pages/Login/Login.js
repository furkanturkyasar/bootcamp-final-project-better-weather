import React from "react";

const Login = ({ setUser, user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      isAuth: true,
    });
  };

  return (
    <div className="login-container">
      <div id="header">
        <img
          id="login-logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
        <h1>Better Weather</h1>
        <div id="left-section">
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <h2>Log in</h2>
              <label className="label" htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="username"
              />

              <label className="label" htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
              />

              <button id="submit-button" type="submit">
                <p>log in</p>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="image-container">
        <img src={process.env.PUBLIC_URL + "login-map.png"} alt="world map" />
      </div>
    </div>
  );
};

export default Login;

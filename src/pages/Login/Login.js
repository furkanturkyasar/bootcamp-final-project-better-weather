import { toast } from "react-toastify";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const { user, setUser, login } = useContext(UserContext);

  const userNameControl = (e) => {
    const trimmedUserName = e.target.value.trim();

    setUser({
      ...user,
      username: trimmedUserName,
    });
  };

  const passwordControl = (e) => {
    const trimmedPassword = e.target.value.trim();

    setUser({
      ...user,
      password: trimmedPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "admin") {
      login(user);

      toast.success("Logged in!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn("Wrong username or password!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="login-container">
      <div id="header">
        <img
          id="login-logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
        <h2>Better Weather</h2>
        <div id="left-section">
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <h3>Log in</h3>
              <label className="label" htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="username"
                onChange={userNameControl}
              />

              <label className="label" htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                onChange={passwordControl}
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

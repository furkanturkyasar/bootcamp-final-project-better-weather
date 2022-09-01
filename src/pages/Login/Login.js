import { toast } from "react-toastify";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  localStorage.setItem("user", JSON.stringify(user));

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "admin") {
      setUser({
        ...user,
        isAuth: true,
      });

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

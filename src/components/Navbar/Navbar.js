import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  let navigation = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    localStorage.removeItem("auth");

    navigation("/");
  };

  return (
    <div className="nav-container">
      <div id="header">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        <h1>Better Weather</h1>
        <h3>for better plans</h3>
      </div>
      <div className="nav-right-section">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;

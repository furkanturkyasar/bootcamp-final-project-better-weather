import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  localStorage.setItem("user", JSON.stringify(user));

  const handleLogout = () => {
    setUser({
      ...user,
      isAuth: false,
    });
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

import { useNavigate } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import UserContext from "../../context/UserContext";
import { useContext, useEffect } from "react";

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
    <>
      <div className="contact">
        <div className="contact-options">
          <a href="https://github.com/furkanturkyasar" target="blank">
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/furkan-turkyasar/"
            target="blank"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
        </div>
      </div>
      <div className="nav-container">
        <div id="header">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
          <h2>Better Weather</h2>
          <h4>for better plans</h4>
        </div>
        <div className="nav-right-section">
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

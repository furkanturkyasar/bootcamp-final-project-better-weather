import Login from "../Login";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Home = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <div>
      {!loggedIn ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Container />
        </>
      )}
    </div>
  );
};

export default Home;

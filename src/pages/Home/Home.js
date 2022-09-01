import { useContext } from "react";
import Login from "../Login";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import UserContext from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {!user.isAuth ? (
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

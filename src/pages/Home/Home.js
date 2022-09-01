import { useState } from "react";
import Login from "../Login";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";

const Home = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isAuth: false,
  });

  return (
    <div>
      {!user.isAuth ? (
        <Login user={user} setUser={setUser} />
      ) : (
        <>
          <Navbar user={user} setUser={setUser} />
          <Container />
        </>
      )}
    </div>
  );
};

export default Home;

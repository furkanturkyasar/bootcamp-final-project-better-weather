import { useState } from "react";
import Login from "../Login";
import { toast } from "react-toastify";

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
          {toast.success("Successfully logged in", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })}
        </>
      )}
    </div>
  );
};

export default Home;

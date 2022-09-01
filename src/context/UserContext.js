import { useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let defaultValues = {
    username: "",
    password: "",
    isAuth: false,
  };

  if (localStorage.getItem("user")) {
    defaultValues = JSON.parse(localStorage.getItem("user"));
  }

  const [user, setUser] = useState(defaultValues);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

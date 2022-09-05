import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./styles/main.scss";
import { UserProvider } from "./context/UserContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </UserProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;

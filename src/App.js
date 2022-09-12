import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { WeatherProvider } from "./context/WeatherContext";
import ErrorBoundary from "./components/ErrorBoundary.js";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./styles/main.scss";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <WeatherProvider>
        <UserProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary type="Home page">
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route path="/map" element={<Map />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </UserProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;

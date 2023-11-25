import { Route, Routes } from "react-router-dom";
import Dashboard from "./Frontend/Pages/Dashboard";
import Home from "./Frontend/Pages/Home";
import Profile from "./Frontend/Pages/Profile";
import Login from "./Frontend/Pages/Login";
import Sign from "./Frontend/Pages/Sign";
import SlideBar from "./Frontend/Pages/SlideBar";

import "./Frontend/Style/App.scss";

function App() {
  return (
    <>
      <div className="App-Page">
        <SlideBar />
        <div className="route-conf">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

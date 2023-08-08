import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LogIn from "./pages/LogIn/Login";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Report from "./pages/Report/Report";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const [user, setUser] = useState();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn setUser={setUser} />} />
        </Routes>

        {user && (
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/report" element={<Report />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;

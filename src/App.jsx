import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LogIn from "./pages/LogIn/Login";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Report from "./pages/Report/Report";
import Spending from "./pages/Spending/Spending";

const App = () => {
  const [user, setUser] = useState();
  const [expense, setExpense] = useState([]);

  const getExpenses = async () => {
    // const url = "http://localhost:8080/expenses";
    let url = "https://expense-manager-backend-seven.vercel.app/expenses";
    const res = await fetch(url);
    const data = await res.json();
    setExpense(data);
  };

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn setUser={setUser} />} />
        </Routes>

        {user && expense && (
          <Routes>
            <Route path="/home" element={<Home expense={expense} />} />
            <Route path="/add" element={<Add expense={expense} />} />
            <Route path="/spending" element={<Spending expense={expense} />} />
            <Route path="/report" element={<Report expense={expense} />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;

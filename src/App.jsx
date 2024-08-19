import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Products from "./components/Products";
import News from "./components/News";
import Account from "./components/Account";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/products" element={<Products />} />
                <Route path="/news" element={<News />} />
                <Route path="/account" element={<Account />} />
                <Route path="/signup" element={<SignUp />} />{" "}
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />{" "}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

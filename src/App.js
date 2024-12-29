import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import NewPage from "./Components/NewPage";
import Layout from "./Components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <Router>
       <Layout>
      <Routes>
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />

        <Route path="/new" element={<NewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;

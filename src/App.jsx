import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={token ? <UsersPage /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={token ? <EditUserPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">EmployWise</span>
      <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { loginUser } from "../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/users";
    } catch (err) {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded w-50" onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

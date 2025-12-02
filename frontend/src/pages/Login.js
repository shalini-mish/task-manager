import React, { useState, useContext } from "react";
//import API from "../services/api";

import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
  e.preventDefault();

  try {
    await login(form);   // Correct way
    navigate("/dashboard");
  } catch (err) {
    alert(err.response?.data?.message || err.message);
  }
};

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={onSubmit}>
        <h2>Welcome Back 👋</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={onChange}
          required
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

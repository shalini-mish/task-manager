import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    // Frontend email check
    if (!emailPattern.test(form.email.trim())) {
      alert("❌ Enter a valid email!");
      return;
    }

    // Frontend password check
    if (!passwordPattern.test(form.password)) {
      alert(
        "❌ Password must be 8+ chars, include uppercase, lowercase, number & special symbol."
      );
      return;
    }

    try {
      await API.post("/auth/register", form);


      alert("🎉 Registration Successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={onSubmit}>
        <h2>Create Account 📝</h2>

        <input name="name" placeholder="Full Name" onChange={onChange} required />
        <input name="email" placeholder="Email" onChange={onChange} required />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

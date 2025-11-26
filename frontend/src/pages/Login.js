import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api";   // <-- FIXED

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, form);

      localStorage.setItem("token", res.data.token);

      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 800);

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  button: {
    padding: "10px",
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  message: {
    color: "red",
    marginTop: "10px"
  }
};

export default Login;

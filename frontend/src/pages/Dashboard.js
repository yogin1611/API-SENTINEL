import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome to API Sentinel </p>

      <button style={styles.button} onClick={() => navigate("/tasks")}>
        Go to Tasks
      </button>

      <button style={{ ...styles.button, background: "#e74c3c" }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    display: "block",
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default Dashboard;

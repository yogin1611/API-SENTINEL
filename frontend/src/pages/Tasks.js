import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: `${API_BASE_URL}/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });

  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", form);
      setForm({ title: "", description: "" });
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const markComplete = async (id) => {
    try {
      await api.patch(`/tasks/${id}`, { completed: true });
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Your Tasks</h2>

      <form onSubmit={handleCreate} style={styles.form}>
        <input
          type="text"
          placeholder="Task Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Add Task</button>
      </form>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <div>
              <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title}
              </h3>
              <p>{task.description}</p>
            </div>

            <div>
              {!task.completed && (
                <button
                  onClick={() => markComplete(task.id)}
                  style={styles.completeBtn}
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => deleteTask(task.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  taskItem: {
    background: "#f9f9f9",
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  completeBtn: {
    padding: "8px",
    marginRight: "10px",
    background: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  deleteBtn: {
    padding: "8px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Tasks;

import React, { useContext, useState, useEffect } from "react";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const onCreated = (task) =>
    setTasks((prev) => [task, ...prev]);

  const onUpdated = (task) =>
    setTasks((prev) =>
      prev.map((t) => (t._id === task._id ? task : t))
    );

  const onDeleted = (id) =>
    setTasks((prev) =>
      prev.filter((t) => t._id !== id)
    );

  const doLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <header className="dashboard-header text-center">

        <div className="flex items-center justify-center h-screen">
          <h2 className="text-center uppercase text-2xl font-bold">
            👋 WELCOME, {user?.name?.toUpperCase()}
          </h2>
        </div>

        <button className="logout-btn" onClick={doLogout}>
          Logout
        </button>
      </header>

      {/* MAIN CONTENT */}
      <div className="dashboard-content">
        <TaskForm onCreated={onCreated} />
        <TaskList tasks={tasks} onUpdated={onUpdated} onDeleted={onDeleted} />
      </div>

    </div>
  );
}

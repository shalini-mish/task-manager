import React from "react";
import API from "../services/api";

export default function TaskList({ tasks, onUpdated, onDeleted }) {
  const toggleStatus = async (task) => {
    const next = task.status === "done" ? "pending" : "done";
    const res = await API.put(`/tasks/${task._id}`, { status: next });
    onUpdated(res.data);
  };

  const remove = async (id) => {
    await API.delete(`/tasks/${id}`);
    onDeleted(id);
  };

  return (
    <div>
      {tasks.map((t) => (
        <div key={t._id} style={{ border: "1px solid #ddd", padding: 8, margin: 6 }}>
          <h4>
            {t.title} <small>({t.status})</small>
          </h4>
          <p>{t.description}</p>

          <button onClick={() => toggleStatus(t)}>
            {t.status === "done" ? "Mark Pending" : "Mark Done"}
          </button>

          <button onClick={() => remove(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

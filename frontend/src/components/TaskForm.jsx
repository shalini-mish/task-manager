import React, { useState } from "react";
import API from "../services/api";

export default function TaskForm({ onCreated }) {
  const [form, setForm] = useState({ title: "", description: "" });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post("/tasks", form);
      setForm({ title: "", description: "" });
      onCreated(res.data);
    } catch (err) { alert(err.response?.data?.message || err.message); }
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={onChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={onChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

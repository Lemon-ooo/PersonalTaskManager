// src/pages/AddTaskPage.tsx
import React from "react";
import TaskForm, { Task } from "../components/TaskForm";
import { useAuth } from "../hooks/useAuth";

export default function AddTaskPage() {
  const { handleAdd } = useAuth(); // ← đã có gọi API

  // Truyền handleAdd vào props onSubmit
  return <TaskForm onSubmit={handleAdd} />;
}

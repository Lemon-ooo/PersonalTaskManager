// src/pages/TaskAdd.tsx
import React from "react";
import TaskForm from "../components/TaskForm";
import { useTask } from "../hooks/useTask";

export default function TaskAdd() {
  const { handleAdd } = useTask();

  return <TaskForm onSubmit={handleAdd} />;
}

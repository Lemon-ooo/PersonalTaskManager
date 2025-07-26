// src/pages/TaskEdit.tsx
import React from "react";
import TaskForm from "../components/TaskForm";
import { useTask } from "../hooks/useTask";

export default function TaskEdit() {
  const { handleEdit } = useTask();

  return <TaskForm onSubmit={handleEdit} />;
}

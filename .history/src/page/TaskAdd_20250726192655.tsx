import React from "react";
import TaskForm, { Task } from "../components/TaskForm";
import { useAuth } from "../hooks/useAuth";

export default function TaskAdd() {
  const { handleAdd } = useAuth();

  return <TaskForm onSubmit={handleAdd} />;
}

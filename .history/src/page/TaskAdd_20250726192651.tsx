import React from "react";
import TaskForm, { Task } from "../components/TaskForm";
import { useAuth } from "../hooks/useAuth";

export default function TaskAdd() {
  const { handleAdd } = useAuth(); // ← đã có gọi API

  return <TaskForm onSubmit={handleAdd} />;
}

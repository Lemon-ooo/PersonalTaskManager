import React from "react";
import TaskForm, { Task } from "../components/TaskForm";
import { useAuth } from "../hooks/useAuth";
import { useTask } from "../hooks/useTask";

export default function TaskAdd() {
  const { handleAdd } = useTask();

  return <TaskForm onSubmit={handleAdd} />;
}

import { func } from "prop-types";
import {
  User,
  registerUser,
  registerUser as registerUserService,
} from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  addTask,
  editTask,
  deleteTask,
  Task,
  getAll,
  getTaskById,
} from "../services/task";
import { get } from "react-hook-form";
import { useState } from "react";

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const nav = useNavigate();
  const { id } = useParams();
  function handlegetAll() {
    getAll()
      .then(({ data }) => {
        setTasks(data);
        toast.success("Get all tasks successful");
      })
      .catch((err: unknown) => {
        console.error(err);
        toast.error("Failed to get tasks");
      });
  }
  function handleAdd(value: Task) {
    addTask(value)
      .then(() => {
        toast.success("Registration successful");
        nav("/tasks/list");
      })
      .catch((err: unknown) => {
        console.error(err);
        toast.error("Thêm công việc thất bại");
      });
  }
  function handleEdit(value: Task) {
    if (!id) return;
    editTask(value, id)
      .then(() => {
        toast.success("Login successful");
        nav("/product/list");
      })
      .catch((err: unknown) => {
        console.error(err);
        toast.error("Login failed");
      });
  }
  function handleDelete(id: string) {
    if (!id) return;
    deleteTask(id)
      .then(() => {
        toast.success("Login successful");
        location.reload();
      })
      .catch((err: unknown) => {
        console.error(err);
        toast.error("Login failed");
      });
  }
  function handleGetDetail(id: string) {
    return getTaskById(id)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        toast.error("Không lấy được thông tin công việc");
      });
  }

  return {
    handleAdd,
    handleEdit,
    handleDelete,
    handlegetAll,
    tasks,
    handleGetDetail,
  };
}

import { useState } from "react";
import {
  Task,
  getAll,
  addTask,
  editTask,
  deleteTask,
  getTaskById,
} from "../services/task";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  const { getCurrentUser } = useAuth();
  const currentUser = getCurrentUser();

  async function handlegetAll() {
    if (!currentUser) {
      toast.error("Không xác định được người dùng.");
      return;
    }
    try {
      const res = await getAll(currentUser.username);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Lỗi khi lấy danh sách task.");
    }
  }
  async function handleGetDetail(id: string): Promise<Task | null> {
    if (!currentUser) {
      toast.error("Không xác định người dùng.");
      return null;
    }

    try {
      const res = await getTaskById(id);
      const task = res.data;

      if (task.username !== currentUser.username) {
        toast.error("Bạn không có quyền xem task này.");
        navigate("/tasks/list");
        return null;
      }

      return task;
    } catch (err) {
      toast.error("Không tìm thấy task.");
      navigate("/tasks/list");
      return null;
    }
  }

  async function handleAdd(task: Task) {
    if (!currentUser) return;

    try {
      await addTask({ ...task, username: currentUser.username });
      toast.success("Thêm task thành công");
      navigate("/tasks/list");
    } catch (err) {
      toast.error("Lỗi khi thêm task.");
    }
  }

  async function handleEdit(task: Task, id: string) {
    try {
      const oldTask = await handleGetDetail(id);
      if (!oldTask) return;

      const updatedTask = { ...task, username: oldTask.username }; // giữ lại username gốc

      await editTask(updatedTask, Number(id));
      toast.success("Sửa task thành công");
      navigate("/tasks/list");
    } catch (err) {
      toast.error("Lỗi khi sửa task.");
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteTask(id);
      toast.success("Xoá thành công");
      handlegetAll(); // cập nhật lại list
    } catch (err) {
      toast.error("Lỗi khi xoá task.");
    }
  }

  return {
    tasks,
    handlegetAll,
    handleAdd,
    handleEdit,
    handleDelete,
    handleGetDetail,
  };
}

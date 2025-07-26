import axios from "axios";

export type Task = {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  status: "todo" | "in-progress" | "done";
  username: string;
};

export function addTask(data: Task) {
  return axios.post("http://localhost:3000/tasks", data);
}
export function editTask(data: Task, id: string) {
  return axios.put("http://localhost:3000/tasks/" + id, data);
}
export function getAll(username: string) {
  return axios.get("http://localhost:3000/tasks?username=" + username);
}
export function getTaskById(id: string) {
  return axios.get("http://localhost:3000/tasks/" + id);
}
export function deleteTask(id: string) {
  return axios.delete("http://localhost:3000/tasks/" + id);
}

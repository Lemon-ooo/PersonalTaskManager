import axios from "axios";

export type Task = {
  title: string;
  description: string;
  dueDate: string;
  status: "todo" | "in-progress" | "done";
};

export function addTask(data: Task) {
  return axios.post("http://localhost:3000/tasks", data);
}
export function editTask(data: Task, id: string) {
  return axios.put("http://localhost:3000/tasks/" + id, data);
}
export function getAll() {
  return axios.get("http://localhost:3000/tasks");
}
export function deleteTask(id: string) {
  return axios.delete("http://localhost:3000/tasks" + id);
}

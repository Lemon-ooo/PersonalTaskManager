import axios from "axios";

export type Task = {
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
}

export function addTask(data: Task){
    return axios.post("http://localhost:3000/tasks", data)
}
export function editTask(data: Task, id: string){
    return axios.post("http://localhost:3000/tasks/" + id, data)
}
export function getAll(data: Task){
    return axios.post("http://localhost:3000/tasks", data)
}
export function getDetail(data: Task){
    return axios.post("http://localhost:3000/tasks", data)
}
export function deleteTask(id: string){
    return axios.delete("http://localhost:3000/tasks" + id)
}
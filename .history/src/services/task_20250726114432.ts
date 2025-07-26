import axios from "axios";

export type Task = {
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
}

export function registerUser(data: User){
    return axios.post("http://localhost:3000/resgister", data)
}
export function loginUser(data: User){
    return axios.post("http://localhost:3000/login", data)
}
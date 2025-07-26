import axios from "axios";

export type User = {
    email: string;
    password: string;
}

export function registerUser(data: User){
    return axios.post("http://localhost:3000/resgister")
}
export function loginUser(data: User){
    return axios.post("http://localhost:3000/resgister")
}
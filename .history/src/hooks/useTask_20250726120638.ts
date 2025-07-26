import { func } from "prop-types";
import { User, registerUser, registerUser as registerUserService } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask, Task } from "../services/task";

export function useAuth() {
    const nav = useNavigate();
    const { id } = useParams();
    function handleAdd(value: Task){
        addTask(value).then(() => {
            toast.success("Registration successful");
            nav("/product/list");
        }).catch((err: unknown) => {
            console.error(err);
            toast.error("Registration failed");
        });
    }
    function handleEdit(value: Task){
        if (!id) return;
        editTask(value, id).then(() => {
            toast.success("Login successful");
            nav("/product/list");
        }).catch((err: unknown) => {
            console.error(err);
            toast.error("Login failed");
        });
    }

    return {
        editTask,
        addTask
    };
}

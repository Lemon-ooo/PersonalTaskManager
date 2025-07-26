import { func } from "prop-types";
import { User, registerUser, registerUser as registerUserService } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const nav = useNavigate();
    function handleUser(value: User){
        registerUser(value).then(() => {
            toast.success("Registration successful");
            nav("/login");
        })
    }
}
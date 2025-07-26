import { func } from "prop-types";
import {
  User,
  registerUser,
  registerUser as registerUserService,
} from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const nav = useNavigate();
  function handleRegister(value: User) {
    registerUser(value)
      .then(() => {
        toast.success("Registration successful");
        nav("/login");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Registration failed");
      });
  }
  function handleLogin(value: User) {
    registerUser(value)
      .then(({ data }) => {
        localStorage.setItem("token", data.accessToken);
        toast.success("Login successful");
        nav("/product/list");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed");
      });
  }

  return {
    handleRegister,
    handleLogin,
  };
}

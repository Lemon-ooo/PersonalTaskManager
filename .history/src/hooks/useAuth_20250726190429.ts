import { User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const nav = useNavigate();

  function handleLogin(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Login successful");
    nav("/");
  }

  function handleLogout() {
    localStorage.removeItem("user");
    toast.success("Logged out");
    nav("/login");
  }

  function getCurrentUser(): User | null {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  }

  return {
    handleLogin,
    handleLogout,
    getCurrentUser,
  };
}

import React from "react";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";
import { User } from "../services/auth";

export default function LoginPage() {
  const { handleLogin } = useAuth();

  const onSubmit = (data: User) => {
    handleLogin(data);
    localStorage.setItem("username", "Tên người dùng đăng nhập");
  };

  return (
    <div className="mt-5">
      <h2 className="text-center">Login</h2>
      <AuthForm onSubmit={onSubmit} />
    </div>
  );
}

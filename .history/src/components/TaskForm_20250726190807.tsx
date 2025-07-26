import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../services/auth";
import { Task } from "../services/task";

type Props = {
  onSubmit: (data: Task) => void;
};

export default function AuthForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<Task>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

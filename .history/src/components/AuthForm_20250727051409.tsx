import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../services/auth";

type Props = {
  onSubmit: (data: User) => void;
};

export default function AuthForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<User>();

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
        {errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

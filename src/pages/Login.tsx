import { useState, FormEvent, ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
export type SignInFormData = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.login, {
    onSuccess: () => {
      showToast({ message: "Login Succesfull", type: "SUCCESS" });
      navigate("/");
    },
  });

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Login
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: "this Field is required " })}
            className={inputStyles}
          />
          {errors.email && (
            <span className="text-red-500"> {errors.email.message} </span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "this Field Is requiired" })}
            className={inputStyles}
          />
          {errors.password && (
            <span className="text-red-500"> {errors.password.message} </span>
          )}
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
        </form>
        <button className="text-blue-700 underline">Sign Up</button>
      </div>
    </section>
  );
};

export default Login;

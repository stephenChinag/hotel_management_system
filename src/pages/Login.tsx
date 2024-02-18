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

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("http://13.48.114.201/api/token/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Assuming the token is returned in the response data
  //       const token = data.token;
  //       // Store the token in localStorage or session storage for future use
  //       localStorage.setItem("token", token);
  //       // Redirect or navigate to the desired page
  //       toast.success(" login succesfull");
  //       navigate("/");
  //     } else {
  //       // Login failed
  //       const errorData = await response.json();
  //       toast.error(errorData.detail);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Something went wrong. Please try again later.");
  //   }
  // };
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

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "this Field Is requiired" })}
            className={inputStyles}
          />

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

import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const navigate = useNavigate();
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formdata, [name]: value });
  // };

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "http://13.48.114.201/api/registerandupdate_user/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formdata),
  //       }
  //     );

  //     if (response.ok) {
  //       // Registration successful, you can navigate to the login page or perform any other action
  //       toast.success("signUp Succesfull");
  //       navigate("/login");
  //     } else {
  //       // Registration failed
  //       const errorData = await response.json();
  //       console.error(errorData); // Log the error for debugging
  //       toast.error("Failed to create user. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error(error); // Log any network or other errors
  //     toast.error("Something went wrong. Please try again later.");
  //   }
  // };
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="first name"
            {...register("firstname", { required: "This Field Is Required " })}
            required
            className={inputStyles}
          />
          {errors.firstname && <span> {errors.firstname.message}</span>}

          <input
            type="text"
            placeholder="Last name"
            {...register("lastname", { required: "This Field Is Required" })}
            className={inputStyles}
          />
          {errors.lastname && <span> {errors.lastname.message}</span>}
          <input
            type="email"
            placeholder="Mike@company.com"
            {...register("email", { required: "This Field is Required " })}
            className={inputStyles}
          />
          {errors.email && <span> {errors.email.message} </span>}

          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: "This field is Required ",
              minLength: { value: 6, message: "" },
            })}
            className={inputStyles}
          />
          {errors.password && <span> {errors.password.message}</span>}

          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>

        <button className="text-blue-700 underline">login</button>
      </div>
    </section>
  );
};

export default Register;

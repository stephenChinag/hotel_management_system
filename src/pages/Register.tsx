import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { redirect, useNavigate } from "react-router-dom";
export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      showToast({ message: "Registratiion success!", type: "SUCCESS" });
      navigate("/login");
    },
    onError: (error: Error) => {
      showToast({ message: "Regittration Failed", type: "ERROR" });
    },
  });

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const onRedirect = () => {
    navigate("/login");
  };
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
            className={inputStyles}
          />
          {errors.firstname && (
            <span className="text-red-500"> {errors.firstname.message}</span>
          )}

          <input
            type="text"
            placeholder="Last name"
            {...register("lastname", { required: "This Field Is Required" })}
            className={inputStyles}
          />
          {errors.lastname && (
            <span className="text-red-500"> {errors.lastname.message}</span>
          )}
          <input
            type="email"
            placeholder="Mike@company.com"
            {...register("email", { required: "This Field is Required " })}
            className={inputStyles}
          />
          {errors.email && (
            <span className="text-red-500"> {errors.email.message} </span>
          )}

          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: "This field is Required ",
              minLength: { value: 6, message: "" },
            })}
            className={inputStyles}
          />
          {errors.password && (
            <span className="text-red-500"> {errors.password.message}</span>
          )}

          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>

        <button onClick={onRedirect} className="text-blue-700 underline">
          login
        </button>
      </div>
    </section>
  );
};

export default Register;

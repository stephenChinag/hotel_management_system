// Register.tsx
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { register } from "../api-client";

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
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(register, {
    onSuccess: () => {
      showToast({ message: "Registration Success", type: "SUCCESS" });
      navigate("/");
    },
    onError: () => {
      showToast({ message: "Registration Failed", type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold"> Create An Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...formRegister("firstname", {
              required: "First Name Is Required",
            })}
          />
          {errors.firstname && (
            <span className="text-red-500">{errors.firstname.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...formRegister("lastname", { required: "Last Name is required" })}
          />
          {errors.lastname && (
            <span className="text-red-500">{errors.lastname.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...formRegister("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...formRegister("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-500"
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;

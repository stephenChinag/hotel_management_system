import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { register, signin } from "../api-client";

export type SignInFormData = {
  email: string;
  password: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>(); // Use SignInFormData type here

  const mutation = useMutation(signin, {
    onSuccess: async () => {
      console.log("user has been signed In");
      showToast({ message: "Login Successfully", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({
        message: "Login Failed. Username or Password Incorrect",
        type: "ERROR",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold"> Sign In</h2>
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
          {...formRegister("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-500"
      >
        Login
      </button>
    </form>
  );
};

export default Signup;

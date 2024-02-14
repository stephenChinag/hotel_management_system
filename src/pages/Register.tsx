import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
const Register = () => {
  const { showToast } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      showToast({ message: "Registration Success", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
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
            {...register("firstname", { required: " First Name Is Required" })}
          />
          {errors.firstname && <span>{errors.firstname.message} </span>}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastname", { required: "Last Name is required" })}
          />
          {errors.lastname && <span>{errors.lastname.message} </span>}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "email is required" })}
        />
        {errors.email && <span>{errors.email.message} </span>}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: " Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && <span> {errors.password.message}</span>}
      </label>
      <span>
        <button
          type="submit"
          // onClick={onSubmit}
          className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-500"
        >
          Create Account{" "}
        </button>
      </span>
    </form>
  );
};

export default Register;

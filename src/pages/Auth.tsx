import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const defaultFormData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formdata, setFormData] = useState(defaultFormData);
  const navigate = useNavigate();
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(formdata);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>

          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />{" "}
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            value={formdata.firstname}
            required
            className={inputStyles}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formdata.lastname}
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Mike@company.com"
            value={formdata.email}
            required
            className={inputStyles}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            required
            minLength={6}
            className={inputStyles}
            onChange={handleInputChange}
          />

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

export default Auth;
